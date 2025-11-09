import { LitElement, html, css } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { TextContent } from '../types';
import { Difficulty } from '../types';
import { generateRandomText } from '../data/wordLists';
import { storageService } from '../services/StorageService';

@customElement('text-selector')
export class TextSelector extends LitElement {
  @property({ type: Array }) texts: TextContent[] = [];
  @property({ type: Array }) unlockedTextIds: string[] = [];
  @property({ type: Number }) userLevel: number = 1;

  @state() private filter: 'all' | 'unlocked' | 'locked' | 'custom' | 'training' = 'all';
  @state() private wordCount: 25 | 50 | 100 = 50;
  @state() private randomDifficulty: 'easy' | 'medium' | 'hard' | 'mixed' = 'mixed';
  @state() private includePunctuation: boolean = false;
  @state() private randomPreviewContent: string = '';

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

    .text-note {
      font-size: 0.75rem;
      color: var(--main-color);
      margin-top: 0.35rem;
      line-height: 1.4;
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      margin-bottom: 1.25rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 1rem;
      flex-wrap: wrap;
    }

    .random-title-group {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .random-title {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color);
      text-transform: lowercase;
    }

    .random-subtitle {
      margin: 0;
      color: var(--sub-color);
      font-size: 0.8rem;
    }

    .random-options {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
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

    .random-preview {
      font-family: 'Roboto Mono', monospace;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      padding: 1.25rem;
      color: var(--text-color);
      line-height: 1.6;
      min-height: 4.5rem;
      margin-bottom: 1.25rem;
    }

    .random-preview.empty {
      color: var(--sub-color);
      font-style: italic;
    }

    .random-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .secondary-btn {
      padding: 0.65rem 1.5rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: 1px solid var(--sub-color);
      background: none;
      color: var(--sub-color);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .secondary-btn:hover {
      color: var(--text-color);
      border-color: var(--text-color);
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

    .training-callout,
    .reading-callout {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      margin-bottom: 2rem;
    }

    .training-callout {
      border-color: rgba(226, 183, 20, 0.3);
      background: rgba(226, 183, 20, 0.05);
    }

    .reading-callout p {
      margin: 0.35rem 0 0;
      color: var(--sub-color);
      font-size: 0.875rem;
    }

    .callout-title {
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--sub-color);
    }

    .training-btn,
    .reading-btn {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      border: 1px solid var(--main-color);
      color: var(--main-color);
      background: none;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .training-btn:hover,
    .reading-btn:hover {
      background: rgba(226, 183, 20, 0.1);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.applyDefaultRandomDifficulty();
    this.generateRandomPreview();
  }

  protected updated(changedProps: PropertyValues<this>) {
    super.updated(changedProps);

    const propMap = changedProps as Map<PropertyKey, unknown>;

    if (
      propMap.has('wordCount') ||
      propMap.has('randomDifficulty') ||
      propMap.has('includePunctuation')
    ) {
      this.generateRandomPreview();
    }
  }

  private generateRandomPreview() {
    this.randomPreviewContent = generateRandomText(
      this.wordCount,
      this.randomDifficulty,
      this.includePunctuation
    );
  }

  private getRandomDifficultyValue(): Difficulty {
    if (this.randomDifficulty === 'easy') {
      return Difficulty.Easy;
    }
    if (this.randomDifficulty === 'hard') {
      return Difficulty.Hard;
    }
    return Difficulty.Medium;
  }

  private applyDefaultRandomDifficulty() {
    if (this.hasExistingUserData()) {
      return;
    }
    this.randomDifficulty = 'easy';
  }

  private hasExistingUserData(): boolean {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }

    try {
      const progress = storageService.getUserProgress();
      return Boolean(progress && progress.sessions && progress.sessions.length > 0);
    } catch (error) {
      console.warn('Unable to read stored progress for random difficulty default.', error);
      return false;
    }
  }

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
    const text = this.texts.find(t => t.id === textId);
    if (text?.category === 'training') {
      return true;
    }
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
      case 'training':
        texts = texts.filter(t => t.category === 'training');
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

  private handleReadingMode() {
    this.dispatchEvent(
      new CustomEvent('start-reading-mode', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleOpenGauntlet() {
    this.filter = 'training';
    this.scrollToTextList();
  }

  private scrollToTextList() {
    const list = this.shadowRoot?.querySelector('.text-list');
    if (list) {
      list.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private handleShuffleRandom() {
    this.generateRandomPreview();
  }

  private handleStartRandom() {
    if (!this.randomPreviewContent) {
      this.generateRandomPreview();
    }

    const randomText: TextContent = {
      id: `random-${Date.now()}`,
      title: `random text (${this.wordCount} words)`,
      content: this.randomPreviewContent,
      difficulty: this.getRandomDifficultyValue(),
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

    this.generateRandomPreview();
  }

  private renderTextItem(text: TextContent) {
    const isLocked = !this.isTextUnlocked(text.id);
    const isCustom = text.category === 'custom';
    const isTraining = text.category === 'training';
    const icon = isLocked ? '🔒' : isTraining ? '🎯' : isCustom ? '📝' : '📖';

    return html`
      <div
        class="text-item ${isLocked ? 'locked' : ''}"
        @click=${() => this.handleTextClick(text)}
        title=${isLocked ? `Requires level ${text.requiredLevel} (you are level ${this.userLevel})` : ''}
      >
        <div class="text-item-left">
          <div class="text-icon">${icon}</div>
          <div class="text-details">
            <div class="text-title">${text.title}</div>
            <div class="text-meta">
              ${text.author ? `${text.author} · ` : ''}${text.wordCount} words
              ${isLocked ? html` · <span style="color: var(--error-color)">requires level ${text.requiredLevel}</span>` : ''}
            </div>
            ${text.fingerNote ? html`<div class="text-note">${text.fingerNote}</div>` : ''}
          </div>
        </div>
        <div class="text-badges">
          <div class="badge difficulty-badge">
            ${this.getDifficultyLabel(text.difficulty)}
          </div>
          ${isTraining ? html`<div class="badge">training</div>` : ''}
          ${!isCustom && !isTraining && !isLocked ? html`
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
        <div class="random-header">
          <div class="random-title-group">
            <div class="random-title">random text</div>
            <p class="random-subtitle">fresh sample is ready - tweak settings to regenerate</p>
          </div>
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
        </div>

        <div class="random-preview ${this.randomPreviewContent ? '' : 'empty'}">
          ${this.randomPreviewContent || 'generating sample...'}
        </div>

        <div class="random-actions">
          <button class="secondary-btn" @click=${this.handleShuffleRandom}>
            shuffle text
          </button>
          <button class="start-random-btn" @click=${this.handleStartRandom}>
            start typing
          </button>
        </div>
      </div>

      <div class="training-callout">
        <div>
          <div class="callout-title">touchtyping gauntlet</div>
          <p>structured drills that layer difficulty and call out the correct finger for every key.</p>
        </div>
        <button class="training-btn" @click=${this.handleOpenGauntlet}>view drills</button>
      </div>

      <div class="reading-callout">
        <div>
          <div class="callout-title">reading mode</div>
          <p>download any project gutenberg book via proxy and type it chunk by chunk.</p>
        </div>
        <button class="reading-btn" @click=${this.handleReadingMode}>open</button>
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
          <button
            class="filter-btn ${this.filter === 'training' ? 'active' : ''}"
            @click=${() => (this.filter = 'training')}
          >
            training
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
