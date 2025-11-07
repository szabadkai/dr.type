import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { TextContent } from '../types';
import { Difficulty } from '../types';
import { generateRandomText } from '../data/wordLists';

@customElement('text-selector')
export class TextSelector extends LitElement {
  @property({ type: Array }) texts: TextContent[] = [];
  @property({ type: Array }) unlockedTextIds: string[] = [];
  @property({ type: Number }) userLevel: number = 1;

  @state() private filter: 'all' | 'unlocked' | 'locked' | 'custom' = 'all';
  @state() private wordCount: 25 | 50 | 100 = 50;
  @state() private randomDifficulty: 'easy' | 'medium' | 'hard' | 'mixed' = 'mixed';
  @state() private includePunctuation: boolean = false;

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

    .random-section {
      background: rgba(255, 255, 255, 0.03);
      padding: 2rem;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .random-header {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color);
      margin-bottom: 1rem;
    }

    .random-options {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .option-group {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .option-label {
      font-size: 0.875rem;
      color: var(--sub-color);
    }

    .option-btn {
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

    .option-btn:hover {
      color: var(--text-color);
      border-color: var(--text-color);
    }

    .option-btn.active {
      color: var(--bg-color);
      background: var(--main-color);
      border-color: var(--main-color);
    }

    .start-random-btn {
      padding: 0.75rem 2rem;
      font-size: 0.875rem;
      font-family: inherit;
      background: var(--main-color);
      color: var(--bg-color);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: opacity 0.2s;
      font-weight: 500;
    }

    .start-random-btn:hover {
      opacity: 0.9;
    }

    .divider {
      height: 1px;
      background: var(--sub-color);
      opacity: 0.2;
      margin: 2rem 0;
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

  private handleStartRandom() {
    const content = generateRandomText(
      this.wordCount,
      this.randomDifficulty,
      this.includePunctuation
    );

    const randomText: TextContent = {
      id: `random-${Date.now()}`,
      title: `Random - ${this.wordCount} words`,
      content,
      difficulty: this.randomDifficulty === 'easy' ? Difficulty.Easy :
                  this.randomDifficulty === 'hard' ? Difficulty.Hard : Difficulty.Medium,
      requiredLevel: 1,
      category: 'custom',
      wordCount: this.wordCount,
    };

    this.dispatchEvent(
      new CustomEvent('text-selected', {
        detail: randomText,
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
        title=${isLocked ? `Requires level ${text.requiredLevel} (you are level ${this.userLevel})` : ''}
      >
        <div class="text-item-left">
          <div class="text-icon">${isLocked ? '🔒' : isCustom ? '📝' : '📖'}</div>
          <div class="text-details">
            <div class="text-title">${text.title}</div>
            <div class="text-meta">
              ${text.author ? `${text.author} · ` : ''}${text.wordCount} words
              ${isLocked ? html` · <span style="color: var(--error-color)">requires level ${text.requiredLevel}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="text-badges">
          <div class="badge difficulty-badge">
            ${this.getDifficultyLabel(text.difficulty)}
          </div>
          ${!isCustom && !isLocked ? html`
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
        <p>complete texts to level up and unlock more content</p>
      </div>

      <div class="random-section">
        <div class="random-header">random text</div>
        <div class="random-options">
          <div class="option-group">
            <span class="option-label">words:</span>
            <button
              class="option-btn ${this.wordCount === 25 ? 'active' : ''}"
              @click=${() => (this.wordCount = 25)}
            >
              25
            </button>
            <button
              class="option-btn ${this.wordCount === 50 ? 'active' : ''}"
              @click=${() => (this.wordCount = 50)}
            >
              50
            </button>
            <button
              class="option-btn ${this.wordCount === 100 ? 'active' : ''}"
              @click=${() => (this.wordCount = 100)}
            >
              100
            </button>
          </div>

          <div class="option-group">
            <span class="option-label">difficulty:</span>
            <button
              class="option-btn ${this.randomDifficulty === 'easy' ? 'active' : ''}"
              @click=${() => (this.randomDifficulty = 'easy')}
            >
              easy
            </button>
            <button
              class="option-btn ${this.randomDifficulty === 'mixed' ? 'active' : ''}"
              @click=${() => (this.randomDifficulty = 'mixed')}
            >
              mixed
            </button>
            <button
              class="option-btn ${this.randomDifficulty === 'hard' ? 'active' : ''}"
              @click=${() => (this.randomDifficulty = 'hard')}
            >
              hard
            </button>
          </div>

          <div class="option-group">
            <button
              class="option-btn ${this.includePunctuation ? 'active' : ''}"
              @click=${() => (this.includePunctuation = !this.includePunctuation)}
            >
              punctuation
            </button>
          </div>
        </div>
        <button class="start-random-btn" @click=${this.handleStartRandom}>
          start typing
        </button>
      </div>

      <div class="divider"></div>

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
