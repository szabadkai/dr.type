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
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .header h1 {
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
      font-weight: 500;
      color: var(--main-color);
    }

    .header p {
      color: var(--sub-color);
      font-size: 0.875rem;
    }

    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filters {
      display: flex;
      gap: 0.5rem;
    }

    .filter-btn {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: none;
      background: none;
      color: var(--sub-color);
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .filter-btn:hover {
      color: var(--text-color);
      background: rgba(255, 255, 255, 0.05);
    }

    .filter-btn.active {
      color: var(--main-color);
      background: rgba(226, 183, 20, 0.1);
    }

    .upload-btn {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: 1px solid var(--sub-color);
      background: none;
      color: var(--sub-color);
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .upload-btn:hover {
      color: var(--text-color);
      border-color: var(--text-color);
    }

    .text-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .text-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      background: rgba(255, 255, 255, 0.02);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
      border: 1px solid transparent;
    }

    .text-item:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: var(--sub-color);
    }

    .text-item.locked {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .text-item.locked:hover {
      background: rgba(255, 255, 255, 0.02);
      border-color: transparent;
    }

    .text-item-left {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex: 1;
    }

    .text-icon {
      font-size: 1.25rem;
      width: 2rem;
      text-align: center;
    }

    .text-details {
      flex: 1;
    }

    .text-title {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color);
      margin-bottom: 0.25rem;
    }

    .text-meta {
      font-size: 0.75rem;
      color: var(--sub-color);
    }

    .text-badges {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .badge {
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      color: var(--sub-color);
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.05);
    }

    .difficulty-badge {
      color: var(--main-color);
    }

    .empty {
      text-align: center;
      padding: 4rem 2rem;
      color: var(--sub-color);
      font-size: 0.875rem;
    }
  `;

  private getDifficultyLabel(difficulty: Difficulty): string {
    const labels: Record<number, string> = {
      1: 'beginner',
      2: 'easy',
      3: 'medium',
      4: 'hard',
      5: 'expert',
    };
    return labels[difficulty] || 'unknown';
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

  private renderTextItem(text: TextContent) {
    const isLocked = !this.isTextUnlocked(text.id);
    const isCustom = text.category === 'custom';

    return html`
      <div
        class="text-item ${isLocked ? 'locked' : ''}"
        @click=${() => this.handleTextClick(text)}
      >
        <div class="text-item-left">
          <div class="text-icon">${isLocked ? '🔒' : isCustom ? '📝' : '📖'}</div>
          <div class="text-details">
            <div class="text-title">${text.title}</div>
            <div class="text-meta">
              ${text.author ? `${text.author} · ` : ''}${text.wordCount} words
            </div>
          </div>
        </div>
        <div class="text-badges">
          <div class="badge difficulty-badge">
            ${this.getDifficultyLabel(text.difficulty)}
          </div>
          ${!isCustom ? html`
            <div class="badge">level ${text.requiredLevel}</div>
          ` : ''}
        </div>
      </div>
    `;
  }

  render() {
    const filteredTexts = this.filteredTexts;

    return html`
      <div class="header">
        <h1>dr.type</h1>
        <p>minimal typing trainer</p>
      </div>

      <div class="controls">
        <div class="filters">
          <button
            class="filter-btn ${this.filter === 'all' ? 'active' : ''}"
            @click=${() => (this.filter = 'all')}
          >
            all
          </button>
          <button
            class="filter-btn ${this.filter === 'unlocked' ? 'active' : ''}"
            @click=${() => (this.filter = 'unlocked')}
          >
            unlocked
          </button>
          <button
            class="filter-btn ${this.filter === 'locked' ? 'active' : ''}"
            @click=${() => (this.filter = 'locked')}
          >
            locked
          </button>
          <button
            class="filter-btn ${this.filter === 'custom' ? 'active' : ''}"
            @click=${() => (this.filter = 'custom')}
          >
            custom
          </button>
        </div>

        <button class="upload-btn" @click=${this.handleUploadClick}>
          + upload text
        </button>
      </div>

      ${filteredTexts.length > 0
        ? html`
            <div class="text-list">
              ${filteredTexts.map(text => this.renderTextItem(text))}
            </div>
          `
        : html`<div class="empty">no texts found</div>`}
    `;
  }
}
