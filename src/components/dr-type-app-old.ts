import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { TextContent, TypingSession, UserProgress } from '../types';
import { Difficulty } from '../types';
import { textManager } from '../services/TextManager';
import { storageService } from '../services/StorageService';
import { levelProgressionService } from '../services/LevelProgressionService';

import './typing-area';
import './text-selector';
import './user-progress';

type AppView = 'menu' | 'typing' | 'upload';

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
      background: #f5f5f5;
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
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.3s;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .modal-content {
      background: white;
      padding: 3rem;
      border-radius: 16px;
      text-align: center;
      max-width: 500px;
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-content h2 {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .modal-content p {
      font-size: 1.25rem;
      color: #666;
      margin-bottom: 2rem;
    }

    .modal-content button {
      padding: 1rem 2rem;
      font-size: 1.125rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .modal-content button:hover {
      transform: translateY(-2px);
    }

    .upload-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .upload-content {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      max-width: 600px;
      width: 90%;
    }

    .upload-content h2 {
      margin: 0 0 1.5rem 0;
      color: #333;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #666;
      font-weight: 500;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      font-family: inherit;
    }

    .form-group textarea {
      min-height: 200px;
      font-family: 'Courier New', monospace;
      resize: vertical;
    }

    .file-upload {
      border: 2px dashed #ddd;
      padding: 2rem;
      text-align: center;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .file-upload:hover {
      border-color: #667eea;
      background: #f8f9ff;
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
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    button.primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    button.secondary {
      background: #e0e0e0;
      color: #666;
    }

    button:hover {
      transform: translateY(-2px);
    }

    .error {
      color: #ff4444;
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadUserProgress();
  }

  private loadUserProgress() {
    let progress = storageService.getUserProgress();

    if (!progress) {
      // Initialize new user
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

    // Save session
    storageService.addSession(session);

    // Check for level up
    const leveledUp = levelProgressionService.updateProgress(session);

    if (leveledUp) {
      const newProgress = storageService.getUserProgress();
      if (newProgress) {
        this.newLevel = newProgress.level;
        this.showLevelUpModal = true;
        this.userProgress = newProgress;
      }
    } else {
      // Just refresh progress
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

  private handleCancelUpload() {
    this.currentView = 'menu';
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

          // Auto-fill title if empty
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
      alert('Please provide at least a title and content');
      return;
    }

    // Add custom text
    const customText = textManager.addCustomText(title, content, author || undefined, difficulty);

    // Update user progress to include new custom text
    if (this.userProgress) {
      const unlockedTexts = [...this.userProgress.unlockedTexts, customText.id];
      storageService.updateLevelProgress(this.userProgress.level, unlockedTexts);
      this.userProgress = storageService.getUserProgress() || this.userProgress;
    }

    // Go back to menu
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
    if (!this.userProgress) return html`<div>Loading...</div>`;

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
      ></text-selector>
    `;
  }

  private renderTyping() {
    return html`
      <typing-area
        .textData=${this.selectedText}
        @session-complete=${this.handleSessionComplete}
        @back-to-menu=${this.handleBackToMenu}
      ></typing-area>
    `;
  }

  private renderUpload() {
    return html`
      <div class="upload-modal">
        <div class="upload-content">
          <h2>📝 Upload Custom Text</h2>

          <form @submit=${this.handleUploadSubmit}>
            <div class="form-group">
              <label>Upload .txt file (optional)</label>
              <div class="file-upload" @click=${() => (this.shadowRoot?.querySelector('#file-input') as HTMLInputElement)?.click()}>
                <input
                  id="file-input"
                  type="file"
                  accept=".txt"
                  @change=${this.handleFileSelect}
                />
                <p>📁 Click to select a .txt file</p>
              </div>
            </div>

            <div class="form-group">
              <label for="text-title">Title *</label>
              <input
                id="text-title"
                name="title"
                type="text"
                placeholder="My Custom Text"
                required
              />
            </div>

            <div class="form-group">
              <label for="text-author">Author (optional)</label>
              <input
                id="text-author"
                name="author"
                type="text"
                placeholder="Author Name"
              />
            </div>

            <div class="form-group">
              <label for="text-difficulty">Difficulty</label>
              <select id="text-difficulty" name="difficulty">
                <option value="${Difficulty.Beginner}">Beginner</option>
                <option value="${Difficulty.Easy}">Easy</option>
                <option value="${Difficulty.Medium}" selected>Medium</option>
                <option value="${Difficulty.Hard}">Hard</option>
                <option value="${Difficulty.Expert}">Expert</option>
              </select>
            </div>

            <div class="form-group">
              <label for="text-content">Content *</label>
              <textarea
                id="text-content"
                name="content"
                placeholder="Paste or type your text here..."
                required
              ></textarea>
            </div>

            <div class="form-actions">
              <button type="button" class="secondary" @click=${this.handleCancelUpload}>
                Cancel
              </button>
              <button type="submit" class="primary">Add Text</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  private renderLevelUpModal() {
    const levelConfig = levelProgressionService.getLevelConfig(this.newLevel);

    return html`
      <div class="level-up-modal" @click=${this.closeLevelUpModal}>
        <div class="modal-content" @click=${(e: Event) => e.stopPropagation()}>
          <h2>🎉 Level Up!</h2>
          <p>You've reached <strong>Level ${this.newLevel}</strong></p>
          <p>${levelConfig?.title}</p>
          <button @click=${this.closeLevelUpModal}>Continue</button>
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
        ${this.showLevelUpModal ? this.renderLevelUpModal() : ''}
      </div>
    `;
  }
}
