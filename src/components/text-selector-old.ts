import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { TextContent } from '../types';
import { Difficulty } from '../types';

@customElement('text-selector')
export class TextSelector extends LitElement {
  @property({ type: Array }) texts: TextContent[] = [];
  @property({ type: Array }) unlockedTextIds: string[] = [];
  @property({ type: Number }) userLevel: number = 1;

  @state() private filter: 'all' | 'unlocked' | 'locked' | 'custom' = 'all';

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .selector-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .header h1 {
      margin: 0 0 0.5rem 0;
      font-size: 2.5rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .header p {
      color: #666;
      font-size: 1.125rem;
    }

    .filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.75rem 1.5rem;
      border: 2px solid #ddd;
      background: white;
      border-radius: 24px;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 1rem;
    }

    .filter-btn:hover {
      border-color: #667eea;
      color: #667eea;
    }

    .filter-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: transparent;
    }

    .text-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .text-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .text-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .text-card.locked {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .text-card.locked:hover {
      transform: none;
    }

    .text-card.locked::after {
      content: '🔒';
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1.5rem;
    }

    .text-card.custom::after {
      content: '📝';
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1.5rem;
    }

    .text-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 0 0 0.5rem 0;
      color: #333;
      padding-right: 2.5rem;
    }

    .text-author {
      color: #666;
      font-style: italic;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .text-meta {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    .badge {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .difficulty-1 {
      background: #e3f2fd;
      color: #1976d2;
    }

    .difficulty-2 {
      background: #e8f5e9;
      color: #388e3c;
    }

    .difficulty-3 {
      background: #fff3e0;
      color: #f57c00;
    }

    .difficulty-4 {
      background: #fce4ec;
      color: #c2185b;
    }

    .difficulty-5 {
      background: #f3e5f5;
      color: #7b1fa2;
    }

    .word-count {
      background: #f5f5f5;
      color: #666;
    }

    .level-badge {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
      color: #999;
    }

    .empty-state-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .upload-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      margin-bottom: 2rem;
    }

    .upload-section h3 {
      margin: 0 0 1rem 0;
    }

    .upload-btn {
      background: white;
      color: #667eea;
      padding: 0.75rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .upload-btn:hover {
      transform: translateY(-2px);
    }
  `;

  private getDifficultyLabel(difficulty: Difficulty): string {
    const labels = {
      [Difficulty.Beginner]: 'Beginner',
      [Difficulty.Easy]: 'Easy',
      [Difficulty.Medium]: 'Medium',
      [Difficulty.Hard]: 'Hard',
      [Difficulty.Expert]: 'Expert',
    };
    return labels[difficulty] || 'Unknown';
  }

  private isTextUnlocked(textId: string): boolean {
    return this.unlockedTextIds.includes(textId);
  }

  private get filteredTexts(): TextContent[] {
    let texts = [...this.texts];

    switch (this.filter) {
      case 'unlocked':
        texts = texts.filter(t => this.isTextUnlocked(t.id));
        break;
      case 'locked':
        texts = texts.filter(t => !this.isTextUnlocked(t.id));
        break;
      case 'custom':
        texts = texts.filter(t => t.category === 'custom');
        break;
    }

    // Sort: unlocked first, then by required level, then by title
    return texts.sort((a, b) => {
      const aUnlocked = this.isTextUnlocked(a.id);
      const bUnlocked = this.isTextUnlocked(b.id);

      if (aUnlocked !== bUnlocked) {
        return bUnlocked ? 1 : -1;
      }

      if (a.requiredLevel !== b.requiredLevel) {
        return a.requiredLevel - b.requiredLevel;
      }

      return a.title.localeCompare(b.title);
    });
  }

  private handleTextClick(text: TextContent) {
    if (!this.isTextUnlocked(text.id)) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent('text-selected', {
        detail: text,
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleUploadClick() {
    this.dispatchEvent(
      new CustomEvent('upload-text', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private renderTextCard(text: TextContent) {
    const isLocked = !this.isTextUnlocked(text.id);
    const isCustom = text.category === 'custom';

    return html`
      <div
        class="text-card ${isLocked ? 'locked' : ''} ${isCustom ? 'custom' : ''}"
        @click=${() => this.handleTextClick(text)}
      >
        <h3 class="text-title">${text.title}</h3>
        ${text.author ? html`<div class="text-author">by ${text.author}</div>` : ''}
        <div class="text-meta">
          <span class="badge difficulty-${text.difficulty}">
            ${this.getDifficultyLabel(text.difficulty)}
          </span>
          <span class="badge word-count">${text.wordCount} words</span>
          ${!isCustom ? html`
            <span class="badge level-badge">Level ${text.requiredLevel}</span>
          ` : ''}
        </div>
      </div>
    `;
  }

  render() {
    const filteredTexts = this.filteredTexts;

    return html`
      <div class="selector-container">
        <div class="header">
          <h1>Dr. Type</h1>
          <p>Choose a text to practice your typing skills</p>
        </div>

        <div class="upload-section">
          <h3>📚 Want to practice with your own text?</h3>
          <button class="upload-btn" @click=${this.handleUploadClick}>
            Upload .txt File
          </button>
        </div>

        <div class="filters">
          <button
            class="filter-btn ${this.filter === 'all' ? 'active' : ''}"
            @click=${() => (this.filter = 'all')}
          >
            All Texts
          </button>
          <button
            class="filter-btn ${this.filter === 'unlocked' ? 'active' : ''}"
            @click=${() => (this.filter = 'unlocked')}
          >
            Unlocked
          </button>
          <button
            class="filter-btn ${this.filter === 'locked' ? 'active' : ''}"
            @click=${() => (this.filter = 'locked')}
          >
            Locked
          </button>
          <button
            class="filter-btn ${this.filter === 'custom' ? 'active' : ''}"
            @click=${() => (this.filter = 'custom')}
          >
            Custom
          </button>
        </div>

        ${filteredTexts.length > 0
          ? html`
              <div class="text-grid">
                ${filteredTexts.map(text => this.renderTextCard(text))}
              </div>
            `
          : html`
              <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <p>No texts found matching the current filter.</p>
              </div>
            `}
      </div>
    `;
  }
}
