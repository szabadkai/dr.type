import type {
  UserProgress,
  TypingSession,
  TextContent,
  ReadingBookProgress,
  ReadingLibrary,
} from '../types';

/**
 * Service for managing Local Storage operations
 */
class StorageService {
  private readonly PROGRESS_KEY = 'drtype_user_progress';
  private readonly CUSTOM_TEXTS_KEY = 'drtype_custom_texts';
  private readonly READING_LIBRARY_KEY = 'drtype_reading_library';

  /**
   * Get user progress from Local Storage
   */
  getUserProgress(): UserProgress | null {
    try {
      const data = localStorage.getItem(this.PROGRESS_KEY);
      if (!data) return null;

      const parsed = JSON.parse(data);

      // Convert date strings back to Date objects
      return {
        ...parsed,
        createdAt: new Date(parsed.createdAt),
        lastUpdated: new Date(parsed.lastUpdated),
        sessions: parsed.sessions.map((session: any) => ({
          ...session,
          completedAt: new Date(session.completedAt),
        })),
        stats: {
          ...parsed.stats,
          commonErrors: new Map(Object.entries(parsed.stats.commonErrors || {})),
        },
      };
    } catch (error) {
      console.error('Error loading user progress:', error);
      return null;
    }
  }

  /**
   * Save user progress to Local Storage
   */
  saveUserProgress(progress: UserProgress): void {
    try {
      const serialized = {
        ...progress,
        stats: {
          ...progress.stats,
          commonErrors: Object.fromEntries(progress.stats.commonErrors),
        },
      };
      localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(serialized));
    } catch (error) {
      console.error('Error saving user progress:', error);
    }
  }

  /**
   * Initialize new user progress
   */
  initializeUserProgress(): UserProgress {
    const initialProgress: UserProgress = {
      level: 1,
      unlockedTexts: [], // Will be populated by LevelProgressionService
      sessions: [],
      stats: {
        totalSessions: 0,
        averageWpm: 0,
        averageAccuracy: 0,
        bestWpm: 0,
        totalWordsTyped: 0,
        totalTimeSeconds: 0,
        commonErrors: new Map(),
      },
      createdAt: new Date(),
      lastUpdated: new Date(),
    };

    this.saveUserProgress(initialProgress);
    return initialProgress;
  }

  /**
   * Add a completed typing session
   */
  addSession(session: TypingSession): void {
    const progress = this.getUserProgress();
    if (!progress) return;

    progress.sessions.push(session);
    progress.lastUpdated = new Date();

    // Update overall stats
    this.updateStats(progress, session);

    this.saveUserProgress(progress);
  }

  /**
   * Update overall statistics after a session
   */
  private updateStats(progress: UserProgress, session: TypingSession): void {
    const stats = progress.stats;

    stats.totalSessions++;
    stats.totalWordsTyped += Math.floor(session.wpm * (session.duration / 60));
    stats.totalTimeSeconds += session.duration;

    // Recalculate averages
    const totalWpm = progress.sessions.reduce((sum, s) => sum + s.wpm, 0);
    const totalAccuracy = progress.sessions.reduce((sum, s) => sum + s.accuracy, 0);

    stats.averageWpm = totalWpm / stats.totalSessions;
    stats.averageAccuracy = totalAccuracy / stats.totalSessions;
    stats.bestWpm = Math.max(stats.bestWpm, session.wpm);

    // Update common errors
    session.errors.forEach(error => {
      const key = error.expected;
      stats.commonErrors.set(key, (stats.commonErrors.get(key) || 0) + 1);
    });
  }

  /**
   * Update user level and unlocked texts
   */
  updateLevelProgress(level: number, unlockedTexts: string[]): void {
    const progress = this.getUserProgress();
    if (!progress) return;

    progress.level = level;
    progress.unlockedTexts = unlockedTexts;
    progress.lastUpdated = new Date();

    this.saveUserProgress(progress);
  }

  /**
   * Get custom texts from Local Storage
   */
  getCustomTexts(): TextContent[] {
    try {
      const data = localStorage.getItem(this.CUSTOM_TEXTS_KEY);
      if (!data) return [];
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading custom texts:', error);
      return [];
    }
  }

  /**
   * Save a custom text
   */
  saveCustomText(text: TextContent): void {
    try {
      const texts = this.getCustomTexts();
      texts.push(text);
      localStorage.setItem(this.CUSTOM_TEXTS_KEY, JSON.stringify(texts));
    } catch (error) {
      console.error('Error saving custom text:', error);
    }
  }

  /**
   * Delete a custom text by ID
   */
  deleteCustomText(textId: string): void {
    try {
      const texts = this.getCustomTexts().filter(t => t.id !== textId);
      localStorage.setItem(this.CUSTOM_TEXTS_KEY, JSON.stringify(texts));
    } catch (error) {
      console.error('Error deleting custom text:', error);
    }
  }

  /**
   * Clear all data (for testing/reset)
   */
  clearAllData(): void {
    localStorage.removeItem(this.PROGRESS_KEY);
    localStorage.removeItem(this.CUSTOM_TEXTS_KEY);
  }

  /**
   * Export progress data as JSON for backup
   */
  exportData(): string {
    const progress = this.getUserProgress();
    const customTexts = this.getCustomTexts();

    return JSON.stringify({
      progress,
      customTexts,
      exportedAt: new Date().toISOString(),
    }, null, 2);
  }

  /**
   * Import progress data from JSON backup
   */
  importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);

      if (data.progress) {
        const progress = {
          ...data.progress,
          createdAt: new Date(data.progress.createdAt),
          lastUpdated: new Date(data.progress.lastUpdated),
          sessions: data.progress.sessions.map((s: any) => ({
            ...s,
            completedAt: new Date(s.completedAt),
          })),
        };
        this.saveUserProgress(progress);
      }

      if (data.customTexts) {
        localStorage.setItem(this.CUSTOM_TEXTS_KEY, JSON.stringify(data.customTexts));
      }

      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  /**
   * Get reading library (books + active selection)
   */
  getReadingLibrary(): ReadingLibrary {
    try {
      const data = localStorage.getItem(this.READING_LIBRARY_KEY);
      if (!data) {
        return { activeBookId: null, books: {} };
      }
      const parsed = JSON.parse(data);
      return {
        activeBookId: parsed.activeBookId ?? null,
        books: parsed.books ?? {},
      };
    } catch (error) {
      console.error('Error loading reading library:', error);
      return { activeBookId: null, books: {} };
    }
  }

  private saveReadingLibrary(library: ReadingLibrary): void {
    try {
      localStorage.setItem(this.READING_LIBRARY_KEY, JSON.stringify(library));
    } catch (error) {
      console.error('Error saving reading library:', error);
    }
  }

  getReadingBook(bookId: string): ReadingBookProgress | null {
    const library = this.getReadingLibrary();
    return library.books[bookId] ?? null;
  }

  saveReadingBook(book: ReadingBookProgress): ReadingLibrary {
    const library = this.getReadingLibrary();
    library.books[book.id] = book;
    if (!library.activeBookId) {
      library.activeBookId = book.id;
    }
    this.saveReadingLibrary(library);
    return library;
  }

  deleteReadingBook(bookId: string): ReadingLibrary {
    const library = this.getReadingLibrary();
    delete library.books[bookId];
    if (library.activeBookId === bookId) {
      library.activeBookId = Object.keys(library.books)[0] ?? null;
    }
    this.saveReadingLibrary(library);
    return library;
  }

  setActiveReadingBook(bookId: string | null): void {
    const library = this.getReadingLibrary();
    if (bookId && !library.books[bookId]) {
      console.warn('Attempted to set unknown reading book as active');
      return;
    }
    library.activeBookId = bookId;
    this.saveReadingLibrary(library);
  }

  getActiveReadingBook(): ReadingBookProgress | null {
    const library = this.getReadingLibrary();
    if (!library.activeBookId) return null;
    return library.books[library.activeBookId] ?? null;
  }
}

// Export singleton instance
export const storageService = new StorageService();
