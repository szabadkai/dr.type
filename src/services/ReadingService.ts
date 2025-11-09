import type {
  ReadingBookProgress,
  BookChunk,
  TextContent,
  TypingSession,
  ReadingLibrary,
} from '../types';
import { Difficulty } from '../types';
import { storageService } from './StorageService';

interface DownloadArgs {
  idOrUrl: string;
  title?: string;
  author?: string;
  chunkSize?: number;
}

interface LocalImportArgs {
  title?: string;
  author?: string;
  content: string;
  chunkSize?: number;
}

interface GutenbergSearchResult {
  id: number;
  title: string;
  authors: string[];
  languages: string[];
  downloadCount: number;
  coverImage?: string;
}

const DEFAULT_PROXY = 'https://r.jina.ai/https://www.gutenberg.org/cache/epub';

interface ChapterCandidate {
  index: number;
  prefix: number;
  label: string;
}

class ReadingService {
  private readonly defaultChunkSize = 500;
  private readonly gutendexEndpoint = 'https://gutendex.com/books';

  getLibrary(): ReadingLibrary {
    return storageService.getReadingLibrary();
  }

  getActiveBook(): ReadingBookProgress | null {
    return storageService.getActiveReadingBook();
  }

  getBook(bookId: string): ReadingBookProgress | null {
    return storageService.getReadingBook(bookId);
  }

  setActiveBook(bookId: string): ReadingBookProgress | null {
    storageService.setActiveReadingBook(bookId);
    return this.getBook(bookId);
  }

  removeBook(bookId: string): ReadingLibrary {
    return storageService.deleteReadingBook(bookId);
  }

  setCurrentChunk(bookId: string, chunkIndex: number): ReadingBookProgress | null {
    const book = this.getBook(bookId);
    if (!book) return null;

    const safeIndex = Math.min(Math.max(chunkIndex, 0), book.totalChunks - 1);
    book.currentChunkIndex = safeIndex;
    book.lastUpdated = new Date().toISOString();
    storageService.saveReadingBook(book);
    return book;
  }

  getChunkAsTextContent(bookId: string, chunkIndex?: number): TextContent | undefined {
    const book = this.getBook(bookId);
    if (!book) return undefined;

    const index = chunkIndex ?? book.currentChunkIndex;
    const chunk = book.chunks[index];
    if (!chunk) return undefined;

    return this.toTextContent(book, chunk);
  }

  getNextChunkPreview(bookId: string, chunkIndex: number): BookChunk | undefined {
    const book = this.getBook(bookId);
    if (!book) return undefined;
    return book.chunks[chunkIndex + 1];
  }

  async downloadBook(args: DownloadArgs): Promise<ReadingBookProgress> {
    const bookId = this.extractBookId(args.idOrUrl);
    if (!bookId) {
      throw new Error('Unable to determine Gutenberg book id');
    }

    const existing = this.getBook(bookId);
    if (existing) {
      storageService.setActiveReadingBook(bookId);
      return existing;
    }

    const { text, source } = await this.downloadBookText(bookId);
    const titleFromText = this.extractMetadata(text, 'title');
    const authorFromText = this.extractMetadata(text, 'author');
    const apiMetadata = (!args.title || !args.author)
      ? await this.fetchGutenbergMetadata(bookId).catch(() => null)
      : null;

    const resolvedTitle = args.title?.trim()
      || apiMetadata?.title
      || titleFromText
      || `Gutenberg #${bookId}`;
    const resolvedAuthor = args.author?.trim()
      || apiMetadata?.author
      || authorFromText
      || undefined;

    const cleaned = this.stripGutenbergText(text);
    const chapterOnly = this.skipToFirstChapter(cleaned);
    const chunkSize = args.chunkSize ?? this.defaultChunkSize;

    const book = this.createBookFromContent({
      id: bookId,
      title: resolvedTitle,
      author: resolvedAuthor,
      source,
      chunkSize,
      content: chapterOnly,
    });

    storageService.saveReadingBook(book);
    storageService.setActiveReadingBook(bookId);
    return book;
  }

  importLocalBook(args: LocalImportArgs): ReadingBookProgress {
    const id = `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const title = args.title?.trim() || 'Uploaded Manuscript';
    const book = this.createBookFromContent({
      id,
      title,
      author: args.author?.trim() || undefined,
      source: 'local-upload',
      chunkSize: args.chunkSize ?? this.defaultChunkSize,
      content: args.content,
    });

    storageService.saveReadingBook(book);
    storageService.setActiveReadingBook(book.id);
    return book;
  }

  async searchGutenberg(query: string): Promise<GutenbergSearchResult[]> {
    if (!query.trim()) return [];

    const url = `${this.gutendexEndpoint}?search=${encodeURIComponent(query.trim())}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Search failed');
    }

    const payload = await response.json();
    const results = Array.isArray(payload.results) ? payload.results : [];
    return results.slice(0, 10).map((result: any) => ({
      id: result.id,
      title: result.title,
      authors: (result.authors || []).map((author: any) => author.name).filter(Boolean),
      languages: result.languages || [],
      downloadCount: result.download_count || 0,
      coverImage:
        result.formats?.['image/jpeg'] || result.formats?.['image/png'] || undefined,
    }));
  }

  completeChunk(bookId: string, chunkIndex: number, session: TypingSession): ReadingBookProgress | null {
    const book = this.getBook(bookId);
    if (!book) return null;

    const chunk = book.chunks[chunkIndex];
    if (!chunk) return book;

    if (!book.completedChunkIds.includes(chunk.id)) {
      book.completedChunkIds.push(chunk.id);
    }

    const nextIndex = Math.min(chunkIndex + 1, book.totalChunks - 1);
    book.currentChunkIndex = nextIndex;
    book.lastUpdated = new Date().toISOString();

    this.updateChunkStats(book, chunk, session);

    storageService.saveReadingBook(book);
    return book;
  }

  private updateChunkStats(book: ReadingBookProgress, chunk: BookChunk, session: TypingSession): void {
    const stats = book.stats;
    stats.totalSessions += 1;
    stats.totalWordsTyped += chunk.wordCount;
    stats.totalErrors += session.errors.length;
    stats.bestWpm = Math.max(stats.bestWpm, session.wpm);

    const totalWpm = stats.averageWpm * (stats.totalSessions - 1) + session.wpm;
    const totalAccuracy = stats.averageAccuracy * (stats.totalSessions - 1) + session.accuracy;

    stats.averageWpm = Math.round((totalWpm / stats.totalSessions) * 10) / 10;
    stats.averageAccuracy = Math.round((totalAccuracy / stats.totalSessions) * 10) / 10;
  }

  private toTextContent(book: ReadingBookProgress, chunk: BookChunk): TextContent {
    return {
      id: `${book.id}-chunk-${chunk.index}`,
      title: `${book.title} — part ${chunk.index + 1}/${book.totalChunks}`,
      author: book.author,
      content: chunk.content,
      difficulty: Difficulty.Medium,
      requiredLevel: 1,
      category: 'custom',
      wordCount: chunk.wordCount,
      nextTextId: chunk.index < book.totalChunks - 1 ? `${book.id}-chunk-${chunk.index + 1}` : undefined,
      bookSeries: book.title,
      chapterNumber: chunk.index + 1,
    };
  }

  private extractBookId(input: string): string | null {
    const match = input.match(/(\d{1,6})/);
    return match ? match[1] : null;
  }

  private async downloadBookText(bookId: string): Promise<{ text: string; source: string }> {
    const base = (import.meta.env.VITE_GUTENBERG_PROXY || DEFAULT_PROXY).replace(/\/$/, '');
    const candidates = [
      `${base}/${bookId}/pg${bookId}.txt`,
      `${base}/${bookId}/pg${bookId}-0.txt`,
      `${base}/${bookId}/${bookId}.txt`,
    ];

    let lastError: unknown;
    for (const url of candidates) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          lastError = new Error(response.statusText);
          continue;
        }
        const text = await response.text();
        if (text && text.length > 500) {
          return { text, source: url };
        }
      } catch (error) {
        lastError = error;
      }
    }

    console.error('Failed to download book', lastError);
    throw new Error('Unable to download book from Project Gutenberg');
  }

  private async fetchGutenbergMetadata(bookId: string): Promise<{ title?: string; author?: string } | null> {
    try {
      const response = await fetch(`${this.gutendexEndpoint}/${bookId}`);
      if (!response.ok) return null;
      const data = await response.json();
      const authorName = Array.isArray(data.authors) && data.authors.length > 0
        ? data.authors[0].name
        : undefined;
      return {
        title: data.title,
        author: authorName,
      };
    } catch (error) {
      console.warn('Failed to fetch Gutenberg metadata', error);
      return null;
    }
  }

  private stripGutenbergText(raw: string): string {
    const startMatch = raw.match(/\*\*\* START OF THE PROJECT GUTENBERG EBOOK .* \*\*\*/i);
    const endMatch = raw.match(/\*\*\* END OF THE PROJECT GUTENBERG EBOOK .* \*\*\*/i);

    let text = raw;
    if (startMatch) {
      text = text.substring(text.indexOf(startMatch[0]) + startMatch[0].length);
    }
    if (endMatch) {
      text = text.substring(0, text.indexOf(endMatch[0]));
    }

    return text
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  private skipToFirstChapter(content: string): string {
    const chapterRegex = /(^|\n)\s*(chapter\s+(ivxlcdm+|\d+|one))\b/gi;
    const allCandidates: ChapterCandidate[] = [];
    let match: RegExpExecArray | null;

    while ((match = chapterRegex.exec(content)) !== null) {
      if (match.index === undefined) continue;
      const prefixLength = match[1] ? match[1].length : 0;
      const label = (match[3] || '').toLowerCase();
      allCandidates.push({ index: match.index, prefix: prefixLength, label });
    }

    if (allCandidates.length === 0) {
      return content;
    }

    const firstChapterLabels = new Set(['i', '1', 'one']);
    const preferred = allCandidates.filter(candidate => firstChapterLabels.has(candidate.label));

    const chosen =
      this.pickChapterCandidate(preferred, allCandidates, content) ||
      this.pickChapterCandidate(allCandidates, allCandidates, content) ||
      this.pickFirstNonContents(allCandidates, content) ||
      allCandidates[0];

    return content.slice(chosen.index + chosen.prefix).trimStart();
  }

  private pickChapterCandidate(
    subset: ChapterCandidate[],
    allCandidates: ChapterCandidate[],
    content: string
  ): ChapterCandidate | null {
    for (const candidate of subset) {
      if (this.isNearContents(content, candidate.index)) {
        continue;
      }

      const next = allCandidates.find(c => c.index > candidate.index);
      const nextIndex = next ? next.index : content.length;
      const gap = nextIndex - candidate.index;

      if (gap > 400) {
        return candidate;
      }
    }
    return null;
  }

  private pickFirstNonContents(candidates: ChapterCandidate[], content: string): ChapterCandidate | null {
    for (const candidate of candidates) {
      if (!this.isNearContents(content, candidate.index)) {
        return candidate;
      }
    }
    return null;
  }

  private isNearContents(content: string, index: number): boolean {
    const windowStart = Math.max(0, index - 800);
    const snippet = content.slice(windowStart, index).toLowerCase();
    return /(contents|table of contents|index)/.test(snippet);
  }

  private extractMetadata(raw: string, field: 'title' | 'author'): string | null {
    const regex = new RegExp(`^${field === 'title' ? 'Title' : 'Author'}:(.*)$`, 'im');
    const match = raw.match(regex);
    return match ? match[1].trim() : null;
  }

  private createChunks(words: string[], chunkSize: number, bookId: string): BookChunk[] {
    const chunks: BookChunk[] = [];

    for (let i = 0; i < words.length; i += chunkSize) {
      const slice = words.slice(i, i + chunkSize);
      if (slice.length === 0) continue;

      const chunk: BookChunk = {
        id: `${bookId}-chunk-${chunks.length}`,
        index: chunks.length,
        startWord: i,
        endWord: Math.min(i + slice.length, words.length),
        wordCount: slice.length,
        content: slice.join(' '),
      };
      chunks.push(chunk);
    }

    return chunks;
  }

  private createBookFromContent(args: {
    id: string;
    title: string;
    author?: string;
    source: string;
    chunkSize: number;
    content: string;
  }): ReadingBookProgress {
    const cleaned = args.content.trim();
    const words = cleaned.split(/\s+/).filter(Boolean);
    const chunkSize = Math.max(args.chunkSize, 200);
    const chunks = this.createChunks(words, chunkSize, args.id);
    if (chunks.length === 0) {
      throw new Error('Book content is empty after parsing');
    }

    return {
      id: args.id,
      title: args.title,
      author: args.author,
      source: args.source,
      chunkSize,
      totalWords: words.length,
      totalChunks: chunks.length,
      chunks,
      currentChunkIndex: 0,
      completedChunkIds: [],
      stats: {
        totalSessions: 0,
        totalWordsTyped: 0,
        totalErrors: 0,
        averageWpm: 0,
        averageAccuracy: 0,
        bestWpm: 0,
      },
      lastUpdated: new Date().toISOString(),
    };
  }
}

export const readingService = new ReadingService();
