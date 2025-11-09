import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { ReadingBookProgress, TextContent, TypingSession, BookChunk } from '../types';
import { readingService } from '../services/ReadingService';
import { storageService } from '../services/StorageService';

type SearchResult = Awaited<ReturnType<typeof readingService.searchGutenberg>> extends Array<infer R>
  ? R
  : never;

@customElement('reading-mode')
export class ReadingMode extends LitElement {
  @state() private library = readingService.getLibrary();
  @state() private activeBook: ReadingBookProgress | null = null;
  @state() private currentChunk: TextContent | null = null;
  @state() private currentChunkIndex: number | null = null;
  @state() private downloading = false;
  @state() private uploading = false;
  @state() private dropActive = false;
  @state() private toastMessage = '';
  @state() private downloadStatus = '';
  @state() private downloadError = '';
  @state() private searchResults: SearchResult[] = [];
  @state() private searchLoading = false;
  @state() private searchError = '';
  @state() private searchQuery = '';
  @state() private preloadedPreview?: BookChunk;

  private toastTimeout?: number;

  static styles = css`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem 4rem;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      gap: 1rem;
      flex-wrap: wrap;
    }

    h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--text-color);
    }

    .ghost-btn {
      background: none;
      border: 1px solid var(--sub-color);
      color: var(--sub-color);
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .ghost-btn:hover {
      border-color: var(--text-color);
      color: var(--text-color);
    }

    .toast {
      margin-bottom: 1.5rem;
      padding: 0.85rem 1rem;
      border-radius: 6px;
      background: rgba(62, 159, 94, 0.15);
      border: 1px solid rgba(62, 159, 94, 0.4);
      color: #8fe3a3;
      font-size: 0.875rem;
    }

    .card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .card h3 {
      margin-top: 0;
      font-size: 1rem;
      text-transform: uppercase;
      color: var(--sub-color);
      letter-spacing: 0.08em;
    }

    form {
      display: grid;
      gap: 1rem;
    }

    label {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: var(--sub-color);
      letter-spacing: 0.08em;
      display: block;
      margin-bottom: 0.35rem;
    }

    input, select {
      width: 100%;
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.2);
      color: var(--text-color);
      font-size: 0.875rem;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    button.primary {
      background: var(--main-color);
      color: var(--bg-color);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
    }

    button.secondary {
      background: none;
      border: 1px solid var(--sub-color);
      color: var(--sub-color);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .stat {
      padding: 1rem;
      border-radius: 6px;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .stat-title {
      font-size: 0.75rem;
      color: var(--sub-color);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.35rem;
    }

    .stat-value {
      font-size: 1.5rem;
      color: var(--main-color);
      font-weight: 500;
    }

    .progress {
      margin: 1rem 0;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: var(--main-color);
    }

    .library-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .upload-drop {
      border: 1px dashed rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      padding: 1rem;
      text-align: center;
      color: var(--sub-color);
      cursor: pointer;
      transition: border-color 0.2s, background 0.2s;
    }

    .upload-drop[data-active='true'] {
      border-color: var(--main-color);
      background: rgba(226, 183, 20, 0.08);
      color: var(--text-color);
    }

    .library-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba(0, 0, 0, 0.2);
    }

    .library-actions {
      display: flex;
      gap: 0.5rem;
    }

    .tag {
      font-size: 0.75rem;
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--sub-color);
    }

    .message {
      font-size: 0.8125rem;
      margin-top: 0.75rem;
    }

    .message.error {
      color: var(--error-color);
    }

    .message.success {
      color: var(--main-color);
    }

    .empty-state {
      text-align: center;
      padding: 2rem 1rem;
      color: var(--sub-color);
    }

    typing-area {
      margin-top: 2rem;
      display: block;
    }

    .search-row {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .search-row input {
      flex: 1;
    }

    .search-results {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .search-result {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba(0, 0, 0, 0.2);
      gap: 1rem;
    }

    .result-meta {
      font-size: 0.75rem;
      color: var(--sub-color);
    }

    .preview-hint {
      font-size: 0.8125rem;
      color: var(--sub-color);
      margin-top: 0.75rem;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.syncState();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
  }

  private syncState() {
    this.library = readingService.getLibrary();
    this.activeBook = readingService.getActiveBook();

    if (this.activeBook) {
      const allDone = this.activeBook.completedChunkIds.length >= this.activeBook.totalChunks;
      if (allDone) {
        this.currentChunk = null;
        this.currentChunkIndex = null;
      } else {
        this.currentChunkIndex = this.activeBook.currentChunkIndex;
        this.currentChunk =
          readingService.getChunkAsTextContent(
            this.activeBook.id,
            this.activeBook.currentChunkIndex
          ) || null;
      }
    } else {
      this.currentChunk = null;
      this.currentChunkIndex = null;
    }
    this.preloadedPreview = undefined;
  }

  private showToast(message: string) {
    this.toastMessage = message;
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastTimeout = window.setTimeout(() => {
      this.toastMessage = '';
      this.toastTimeout = undefined;
    }, 4000);
  }

  private handleExit() {
    this.dispatchEvent(new CustomEvent('exit-reading-mode', { bubbles: true, composed: true }));
  }

  private async handleDownload(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const bookInput = (formData.get('book') as string)?.trim();

    if (!bookInput) {
      this.downloadError = 'please enter a gutenberg id or url';
      return;
    }

    this.downloading = true;
    this.downloadError = '';
    this.downloadStatus = 'downloading book...';

    try {
      await readingService.downloadBook({ idOrUrl: bookInput });
      this.downloadStatus = 'book saved locally — ready to type';
      form.reset();
      this.showToast('book added to your library');
      this.syncState();
    } catch (error) {
      console.error(error);
      this.downloadError = (error as Error).message || 'failed to download book';
      this.downloadStatus = '';
    } finally {
      this.downloading = false;
    }
  }

  private async handleDownloadFromSearch(result: SearchResult) {
    this.downloading = true;
    this.downloadError = '';
    this.downloadStatus = `fetching “${result.title}”...`;

    try {
      await readingService.downloadBook({
        idOrUrl: String(result.id),
        title: result.title,
        author: result.authors?.[0],
      });
      this.downloadStatus = `added “${result.title}” to your library`;
      this.showToast(`loaded ${result.title}`);
      this.syncState();
    } catch (error) {
      console.error(error);
      this.downloadError = (error as Error).message || 'failed to download book';
      this.downloadStatus = '';
    } finally {
      this.downloading = false;
    }
  }

  private async handleSearchSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const query = (formData.get('search') as string)?.trim() || '';

    this.searchQuery = query;
    if (!query) {
      this.searchResults = [];
      this.searchError = 'enter a keyword to search';
      return;
    }

    this.searchLoading = true;
    this.searchError = '';

    try {
      this.searchResults = await readingService.searchGutenberg(query);
      if (this.searchResults.length === 0) {
        this.searchError = 'no matches found — try a different keyword';
      }
    } catch (error) {
      console.error(error);
      this.searchError = (error as Error).message || 'search failed';
      this.searchResults = [];
    } finally {
      this.searchLoading = false;
    }
  }

  private handleSelectBook(bookId: string) {
    readingService.setActiveBook(bookId);
    this.syncState();
  }

  private handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (!this.uploading) {
      this.dropActive = true;
    }
  }

  private handleDragLeave(e: DragEvent) {
    e.preventDefault();
    this.dropActive = false;
  }

  private async handleDropUpload(e: DragEvent) {
    e.preventDefault();
    this.dropActive = false;
    if (this.uploading) return;

    const file = e.dataTransfer?.files?.[0];
    await this.processUploadFile(file);
  }

  private handleOpenFilePicker() {
    if (this.uploading) return;
    const input = this.shadowRoot?.getElementById('upload-input') as HTMLInputElement | null;
    input?.click();
  }

  private async handleFilePickerChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    await this.processUploadFile(file);
    input.value = '';
  }

  private async processUploadFile(file?: File | null) {
    if (!file) {
      this.showToast('no file detected');
      return;
    }

    if (!file.type.includes('text') && !file.name.endsWith('.txt') && !file.name.endsWith('.md')) {
      this.showToast('please drop a .txt or .md file');
      return;
    }

    this.uploading = true;

    try {
      const content = await file.text();
      const book = readingService.importLocalBook({
        title: file.name.replace(/\.[^.]+$/, ''),
        content,
      });
      this.showToast(`uploaded ${book.title}`);
      this.syncState();
    } catch (error) {
      console.error(error);
      this.showToast('unable to process file');
    } finally {
      this.uploading = false;
    }
  }

  private handleDeleteBook(bookId: string) {
    readingService.removeBook(bookId);
    this.syncState();
  }

  private handleTypingProgress(e: CustomEvent<{ progress: number }>) {
    e.stopPropagation();
    if (!this.activeBook || this.currentChunkIndex === null || !this.currentChunk) return;
    if (this.preloadedPreview) return;
    if (e.detail.progress < 0.8) return;

    this.preloadedPreview = readingService.getNextChunkPreview(
      this.activeBook.id,
      this.currentChunkIndex
    );
  }

  private handleChunkComplete(e: CustomEvent<TypingSession>) {
    e.stopPropagation();
    if (!this.activeBook || this.currentChunkIndex === null) return;

    const session = e.detail;
    session.mode = 'reading';
    session.meta = {
      bookId: this.activeBook.id,
      chunkIndex: this.currentChunkIndex,
      chunkId: this.currentChunk?.id,
      chunkRange: this.activeBook.chunks[this.currentChunkIndex]
        ? {
            startWord: this.activeBook.chunks[this.currentChunkIndex].startWord,
            endWord: this.activeBook.chunks[this.currentChunkIndex].endWord,
          }
        : undefined,
    };

    storageService.addSession(session);
    readingService.completeChunk(this.activeBook.id, this.currentChunkIndex, session);

    this.showToast('chunk saved — loading next section');
    this.syncState();
  }

  private handleContinueChunk(e: CustomEvent<string>) {
    e.stopPropagation();
    if (!this.activeBook) return;

    const nextId = e.detail;
    const targetIndex = this.activeBook.chunks.findIndex(chunk => chunk.id === nextId);
    if (targetIndex === -1) return;

    readingService.setCurrentChunk(this.activeBook.id, targetIndex);
    this.syncState();
  }

  private renderActiveBook() {
    if (!this.activeBook) {
      return html`<div class="card">no active book — download or upload one below.</div>`;
    }

    const completed = this.activeBook.completedChunkIds.length;
    const percent = Math.round((completed / this.activeBook.totalChunks) * 100);
    const hasChunk = !!this.currentChunk && this.currentChunkIndex !== null;

    return html`
      <div class="card">
        <h3>active book</h3>
        <div>
          <strong>${this.activeBook.title}</strong>
          ${this.activeBook.author ? html`<span>by ${this.activeBook.author}</span>` : ''}
        </div>
        <div class="progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width:${percent}%"></div>
          </div>
          <small>${completed}/${this.activeBook.totalChunks} chunks (${percent}%)</small>
        </div>
        <div class="stats-grid">
          <div class="stat">
            <div class="stat-title">avg wpm</div>
            <div class="stat-value">${this.activeBook.stats.averageWpm || 0}</div>
          </div>
          <div class="stat">
            <div class="stat-title">avg accuracy</div>
            <div class="stat-value">${this.activeBook.stats.averageAccuracy || 0}%</div>
          </div>
          <div class="stat">
            <div class="stat-title">best chunk wpm</div>
            <div class="stat-value">${this.activeBook.stats.bestWpm || 0}</div>
          </div>
        </div>
        ${this.preloadedPreview
          ? html`<p class="preview-hint">next chunk preloaded — ${this.preloadedPreview.wordCount} words ready</p>`
          : ''}
      </div>
      ${hasChunk
        ? html`
            <typing-area
              .textData=${this.currentChunk}
              @session-complete=${this.handleChunkComplete}
              @typing-progress=${this.handleTypingProgress}
              @back-to-menu=${(event: Event) => event.stopPropagation()}
              @continue-to-next=${this.handleContinueChunk}
            ></typing-area>
          `
        : html`<div class="card">book complete — great work!</div>`}
    `;
  }

  private renderSearchCard() {
    return html`
      <div class="card">
        <h3>search project gutenberg</h3>
        <form @submit=${this.handleSearchSubmit}>
          <div>
            <label for="search">keyword</label>
            <div class="search-row">
              <input
                id="search"
                name="search"
                .value=${this.searchQuery}
                placeholder="e.g. sherlock holmes"
              />
              <button type="submit" class="primary" ?disabled=${this.searchLoading}>
                ${this.searchLoading ? 'searching...' : 'search'}
              </button>
            </div>
          </div>
        </form>
        ${this.searchError ? html`<div class="message error">${this.searchError}</div>` : ''}
        ${this.searchResults.length > 0
          ? html`
              <div class="search-results">
                ${this.searchResults.map(
                  result => html`
                    <div class="search-result">
                      <div>
                        <div><strong>${result.title}</strong></div>
                        <div class="result-meta">
                          ${(result.authors && result.authors.length > 0
                            ? result.authors.join(', ')
                            : 'unknown author')}
                          · ${result.languages?.join(', ') || 'language n/a'}
                          · ${result.downloadCount} downloads
                        </div>
                      </div>
                      <button
                        class="secondary"
                        @click=${() => this.handleDownloadFromSearch(result)}
                        ?disabled=${this.downloading}
                      >
                        add
                      </button>
                    </div>
                  `
                )}
              </div>
            `
          : ''}
      </div>
    `;
  }

  private renderDirectDownloadCard() {
    return html`
      <div class="card">
        <h3>download by gutenberg id</h3>
        <form @submit=${this.handleDownload}>
          <div>
            <label for="book">book id or url</label>
            <input id="book" name="book" placeholder="1342 or https://www.gutenberg.org/ebooks/1342" />
          </div>
          <div class="actions">
            <button type="submit" class="primary" ?disabled=${this.downloading}>
              ${this.downloading ? 'downloading...' : 'save book'}
            </button>
          </div>
        </form>
        ${this.downloadError ? html`<div class="message error">${this.downloadError}</div>` : ''}
        ${this.downloadStatus ? html`<div class="message success">${this.downloadStatus}</div>` : ''}
      </div>
    `;
  }

  private renderLibrary() {
    const bookEntries = Object.values(this.library.books);

    return html`
      <div
        class="upload-drop"
        data-active=${this.dropActive}
        @dragover=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @drop=${this.handleDropUpload}
        @click=${this.handleOpenFilePicker}
      >
        <strong>${this.uploading ? 'processing…' : 'upload book'}</strong>
        <p>${this.uploading ? 'splitting text into chunks' : 'drag a .txt/.md file here or click to browse'}</p>
        <input
          id="upload-input"
          type="file"
          accept=".txt,.text,.md"
          hidden
          @change=${this.handleFilePickerChange}
        />
      </div>

      ${bookEntries.length === 0
        ? html`<div class="empty-state">no saved books yet</div>`
        : html`
      <div class="library-list">
        ${bookEntries.map(book => {
          const isActive = this.activeBook?.id === book.id;
          const percent = Math.round((book.completedChunkIds.length / book.totalChunks) * 100);
          return html`
            <div class="library-item">
              <div>
                <div><strong>${book.title}</strong></div>
                <div class="tag">${percent}% complete</div>
              </div>
              <div class="library-actions">
                <button class="secondary" @click=${() => this.handleSelectBook(book.id)}>
                  ${isActive ? 'resume' : 'load'}
                </button>
                <button class="ghost-btn" @click=${() => this.handleDeleteBook(book.id)}>
                  remove
                </button>
              </div>
            </div>
          `;
        })}
      </div>
      `}
    `;
  }

  render() {
    return html`
      <div class="header">
        <h2>reading mode</h2>
        <button class="ghost-btn" @click=${this.handleExit}>back to menu</button>
      </div>

      ${this.toastMessage ? html`<div class="toast">${this.toastMessage}</div>` : ''}

      ${this.renderActiveBook()}
      ${this.renderSearchCard()}
      ${this.renderDirectDownloadCard()}

      <div class="card">
        <h3>saved books</h3>
        ${this.renderLibrary()}
      </div>
    `;
  }
}
