import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { TextContent, TypingSession, UserProgress } from '../types';
import { Difficulty } from '../types';
import { textManager } from '../services/TextManager';
import { storageService } from '../services/StorageService';
import { levelProgressionService } from '../services/LevelProgressionService';
import { loadTheme } from '../styles/themes';

import './typing-area';
import './text-selector';
import './user-progress';
import './theme-selector';
import './reading-mode';

type AppView = 'menu' | 'typing' | 'upload' | 'reading';

@customElement('dr-type-app')
export class DrTypeApp extends LitElement {
  @state() private currentView: AppView = 'menu';
  @state() private selectedText?: TextContent;
  @state() private userProgress?: UserProgress;
  @state() private showLevelUpModal: boolean = false;
  @state() private newLevel: number = 1;

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .level-up-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-content {
      background: var(--bg-color);
      padding: 3rem;
      border-radius: 8px;
      text-align: center;
      max-width: 400px;
      border: 1px solid var(--sub-color);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-content h2 {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--main-color);
      margin-bottom: 1rem;
    }

    .modal-content p {
      font-size: 1rem;
      color: var(--sub-color);
      margin-bottom: 2rem;
    }

    .modal-content button {
      padding: 0.75rem 2rem;
      font-size: 0.875rem;
      font-family: inherit;
      background: var(--main-color);
      color: var(--bg-color);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .modal-content button:hover {
      opacity: 0.9;
    }

    .upload-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
      overflow-y: auto;
    }

    .upload-content {
      background: var(--bg-color);
      padding: 2rem;
      border-radius: 8px;
      max-width: 600px;
      width: 100%;
      border: 1px solid var(--sub-color);
    }

    .upload-content h2 {
      margin: 0 0 1.5rem 0;
      color: var(--text-color);
      font-size: 1.25rem;
      font-weight: 500;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--sub-color);
      font-size: 0.875rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--sub-color);
      border-radius: 4px;
      font-size: 0.875rem;
      font-family: inherit;
      color: var(--text-color);
      transition: border-color 0.2s;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--main-color);
    }

    .form-group textarea {
      min-height: 200px;
      font-family: 'Roboto Mono', monospace;
      resize: vertical;
    }

    .file-upload {
      border: 2px dashed var(--sub-color);
      padding: 2rem;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
      color: var(--sub-color);
    }

    .file-upload:hover {
      border-color: var(--main-color);
      color: var(--main-color);
    }

    .file-upload input {
      display: none;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    button {
      padding: 0.75rem 1.5rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }

    button.primary {
      background: var(--main-color);
      color: var(--bg-color);
    }

    button.secondary {
      background: rgba(255, 255, 255, 0.05);
      color: var(--sub-color);
      border: 1px solid var(--sub-color);
    }

    button:hover {
      opacity: 0.9;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    loadTheme();
    this.loadUserProgress();
  }

  private loadUserProgress() {
    let progress = storageService.getUserProgress();

    if (!progress) {
      progress = levelProgressionService.initializeProgress();
    }

    this.userProgress = progress;
  }

  private handleTextSelected(e: CustomEvent<TextContent>) {
    this.selectedText = e.detail;
    this.currentView = 'typing';
  }

  private handleSessionComplete(e: CustomEvent<TypingSession>) {
    const session = e.detail;

    storageService.addSession(session);

    const leveledUp = levelProgressionService.updateProgress(session);

    if (leveledUp) {
      const newProgress = storageService.getUserProgress();
      if (newProgress) {
        this.newLevel = newProgress.level;
        this.showLevelUpModal = true;
        this.userProgress = newProgress;
      }
    } else {
      this.userProgress = storageService.getUserProgress() || this.userProgress;
    }
  }

  private handleBackToMenu() {
    this.currentView = 'menu';
    this.selectedText = undefined;
    this.userProgress = storageService.getUserProgress() || this.userProgress;
  }

  private closeLevelUpModal() {
    this.showLevelUpModal = false;
  }

  private handleUploadText() {
    this.currentView = 'upload';
  }

  private handleStartReadingMode() {
    this.currentView = 'reading';
  }

  private handleCancelUpload() {
    this.currentView = 'menu';
  }

  private handleExitReadingMode() {
    this.currentView = 'menu';
    this.loadUserProgress();
  }

  private handleFileSelect(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        const textarea = this.shadowRoot?.querySelector('#text-content') as HTMLTextAreaElement;
        if (textarea) {
          textarea.value = content;

          const titleInput = this.shadowRoot?.querySelector('#text-title') as HTMLInputElement;
          if (titleInput && !titleInput.value) {
            titleInput.value = file.name.replace('.txt', '');
          }
        }
      };
      reader.readAsText(file);
    }
  }

  private handleUploadSubmit(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const content = formData.get('content') as string;
    const difficulty = parseInt(formData.get('difficulty') as string) as Difficulty;

    if (!title || !content) {
      alert('please provide at least a title and content');
      return;
    }

    const customText = textManager.addCustomText(title, content, author || undefined, difficulty);

    if (this.userProgress) {
      const unlockedTexts = [...this.userProgress.unlockedTexts, customText.id];
      storageService.updateLevelProgress(this.userProgress.level, unlockedTexts);
      this.userProgress = storageService.getUserProgress() || this.userProgress;
    }

    this.currentView = 'menu';
  }

  private handleExportData() {
    const exportData = storageService.exportData();
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `drtype-backup-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private renderMenu() {
    if (!this.userProgress) return html`<div>loading...</div>`;

    const allTexts = textManager.getAllTexts();

    return html`
      <user-progress
        .progress=${this.userProgress}
        @export-data=${this.handleExportData}
      ></user-progress>

      <text-selector
        .texts=${allTexts}
        .unlockedTextIds=${this.userProgress.unlockedTexts}
        .userLevel=${this.userProgress.level}
        @text-selected=${this.handleTextSelected}
        @upload-text=${this.handleUploadText}
        @start-reading-mode=${this.handleStartReadingMode}
      ></text-selector>
    `;
  }

  private renderTyping() {
    return html`
      <typing-area
        .textData=${this.selectedText}
        @session-complete=${this.handleSessionComplete}
        @back-to-menu=${this.handleBackToMenu}
        @continue-to-next=${this.handleContinueToNext}
      ></typing-area>
    `;
  }

  private handleContinueToNext(e: CustomEvent<string>) {
    const nextTextId = e.detail;
    const nextText = textManager.getTextById(nextTextId);

    if (nextText) {
      this.selectedText = nextText;
      this.requestUpdate();
    }
  }

  private renderUpload() {
    return html`
      <div class="upload-modal" @click=${this.handleCancelUpload}>
        <div class="upload-content" @click=${(e: Event) => e.stopPropagation()}>
          <h2>upload custom text</h2>

          <form @submit=${this.handleUploadSubmit}>
            <div class="form-group">
              <label>upload .txt file (optional)</label>
              <div class="file-upload" @click=${() => (this.shadowRoot?.querySelector('#file-input') as HTMLInputElement)?.click()}>
                <input
                  id="file-input"
                  type="file"
                  accept=".txt"
                  @change=${this.handleFileSelect}
                />
                <p>click to select a .txt file</p>
              </div>
            </div>

            <div class="form-group">
              <label for="text-title">title *</label>
              <input
                id="text-title"
                name="title"
                type="text"
                placeholder="my custom text"
                required
              />
            </div>

            <div class="form-group">
              <label for="text-author">author (optional)</label>
              <input
                id="text-author"
                name="author"
                type="text"
                placeholder="author name"
              />
            </div>

            <div class="form-group">
              <label for="text-difficulty">difficulty</label>
              <select id="text-difficulty" name="difficulty">
                <option value="${Difficulty.Beginner}">beginner</option>
                <option value="${Difficulty.Easy}">easy</option>
                <option value="${Difficulty.Medium}" selected>medium</option>
                <option value="${Difficulty.Hard}">hard</option>
                <option value="${Difficulty.Expert}">expert</option>
              </select>
            </div>

            <div class="form-group">
              <label for="text-content">content *</label>
              <textarea
                id="text-content"
                name="content"
                placeholder="paste or type your text here..."
                required
              ></textarea>
            </div>

            <div class="form-actions">
              <button type="button" class="secondary" @click=${this.handleCancelUpload}>
                cancel
              </button>
              <button type="submit" class="primary">add text</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  private renderReadingMode() {
    return html`
      <reading-mode @exit-reading-mode=${this.handleExitReadingMode}></reading-mode>
    `;
  }

  private renderLevelUpModal() {
    const levelConfig = levelProgressionService.getLevelConfig(this.newLevel);

    return html`
      <div class="level-up-modal" @click=${this.closeLevelUpModal}>
        <div class="modal-content" @click=${(e: Event) => e.stopPropagation()}>
          <h2>level up!</h2>
          <p>you've reached level ${this.newLevel}</p>
          <p>${levelConfig?.title}</p>
          <button @click=${this.closeLevelUpModal}>continue</button>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="app-container">
        ${this.currentView === 'menu' ? this.renderMenu() : ''}
        ${this.currentView === 'typing' ? this.renderTyping() : ''}
        ${this.currentView === 'upload' ? this.renderUpload() : ''}
        ${this.currentView === 'reading' ? this.renderReadingMode() : ''}
        ${this.showLevelUpModal ? this.renderLevelUpModal() : ''}
      </div>
      <theme-selector></theme-selector>
    `;
  }
}
