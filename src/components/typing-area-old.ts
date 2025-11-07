import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { CharError, TypingState, TextContent, TypingSession } from '../types';
import { StatsCalculator } from '../services/StatsCalculator';

@customElement('typing-area')
export class TypingArea extends LitElement {
  @property({ type: Object }) textData?: TextContent;

  @state() private typingState: TypingState = {
    currentIndex: 0,
    startTime: null,
    endTime: null,
    errors: [],
    isComplete: false,
    wpm: 0,
    accuracy: 100,
  };

  @state() private userInput: string = '';
  @state() private liveWpm: number = 0;
  @state() private liveAccuracy: number = 100;

  private updateInterval?: number;

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    .typing-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .text-info {
      text-align: center;
      margin-bottom: 2rem;
    }

    .text-info h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.5rem;
      color: #333;
    }

    .text-info .author {
      color: #666;
      font-style: italic;
    }

    .text-display {
      font-family: 'Courier New', monospace;
      font-size: 1.25rem;
      line-height: 2;
      padding: 2rem;
      background: #f8f8f8;
      border-radius: 8px;
      margin-bottom: 1rem;
      min-height: 200px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .char {
      position: relative;
    }

    .char.correct {
      color: #00d084;
    }

    .char.incorrect {
      color: #ff4444;
      background: #ffe0e0;
    }

    .char.current {
      background: #4a9eff;
      color: white;
      animation: pulse 1s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    .stats-bar {
      display: flex;
      justify-content: space-around;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 1rem;
    }

    .stat {
      text-align: center;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #4a9eff;
    }

    .stat-label {
      font-size: 0.875rem;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .input-area {
      position: relative;
    }

    .typing-input {
      width: 100%;
      padding: 1rem;
      font-family: 'Courier New', monospace;
      font-size: 1.125rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.2s;
    }

    .typing-input:focus {
      border-color: #4a9eff;
    }

    .typing-input:disabled {
      background: #f0f0f0;
      cursor: not-allowed;
    }

    .completion-message {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
      margin-top: 2rem;
    }

    .completion-message h3 {
      margin: 0 0 1rem 0;
      font-size: 2rem;
    }

    .completion-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
    }

    .completion-stat {
      background: rgba(255, 255, 255, 0.2);
      padding: 1rem;
      border-radius: 8px;
    }

    .grade {
      font-size: 3rem;
      font-weight: bold;
      margin: 1rem 0;
    }

    .actions {
      margin-top: 1rem;
    }

    button {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      margin: 0 0.5rem;
    }

    button.primary {
      background: white;
      color: #667eea;
      font-weight: bold;
    }

    button.secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .instructions {
      text-align: center;
      color: #666;
      font-style: italic;
      margin-top: 1rem;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.handleKeyDown);
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (!this.textData || this.typingState.isComplete) return;

    // Start timer on first keypress
    if (this.typingState.startTime === null) {
      this.typingState = {
        ...this.typingState,
        startTime: Date.now(),
      };
      this.startLiveUpdates();
    }

    // Handle input
    const char = e.key;

    // Ignore special keys except backspace
    if (char.length > 1 && char !== 'Backspace') return;

    e.preventDefault();

    if (char === 'Backspace') {
      this.handleBackspace();
    } else {
      this.handleCharacter(char);
    }
  };

  private handleCharacter(char: string) {
    if (!this.textData) return;

    const expectedChar = this.textData.content[this.typingState.currentIndex];
    const isCorrect = char === expectedChar;

    // Record error if incorrect
    if (!isCorrect) {
      const error: CharError = {
        charIndex: this.typingState.currentIndex,
        expected: expectedChar,
        typed: char,
        timestamp: Date.now(),
      };
      this.typingState.errors.push(error);
    }

    // Update input and move to next character
    this.userInput += char;
    this.typingState.currentIndex++;

    // Check if completed
    if (this.typingState.currentIndex >= this.textData.content.length) {
      this.completeTyping();
    }

    this.requestUpdate();
  }

  private handleBackspace() {
    if (this.typingState.currentIndex === 0) return;

    this.typingState.currentIndex--;
    this.userInput = this.userInput.slice(0, -1);

    // Remove last error if it was at this position
    const lastError = this.typingState.errors[this.typingState.errors.length - 1];
    if (lastError && lastError.charIndex === this.typingState.currentIndex) {
      this.typingState.errors.pop();
    }

    this.requestUpdate();
  }

  private startLiveUpdates() {
    this.updateInterval = window.setInterval(() => {
      if (this.typingState.startTime && !this.typingState.isComplete) {
        this.liveWpm = StatsCalculator.calculateLiveWPM(
          this.typingState.currentIndex,
          this.typingState.startTime,
          this.typingState.errors
        );
        this.liveAccuracy = StatsCalculator.calculateLiveAccuracy(
          this.typingState.currentIndex,
          this.typingState.errors
        );
        this.requestUpdate();
      }
    }, 100);
  }

  private completeTyping() {
    if (!this.textData || !this.typingState.startTime) return;

    const endTime = Date.now();
    const duration = (endTime - this.typingState.startTime) / 1000;

    const wpm = StatsCalculator.calculateWPM(
      this.textData.content.length,
      duration,
      this.typingState.errors.length
    );

    const rawWpm = StatsCalculator.calculateRawWPM(
      this.textData.content.length,
      duration
    );

    const accuracy = StatsCalculator.calculateAccuracy(
      this.textData.content.length,
      this.typingState.errors.length
    );

    this.typingState = {
      ...this.typingState,
      endTime,
      isComplete: true,
      wpm,
      accuracy,
    };

    // Stop live updates
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }

    // Create session and emit event
    const session: TypingSession = {
      id: `session-${Date.now()}`,
      textId: this.textData.id,
      wpm,
      rawWpm,
      accuracy,
      errors: this.typingState.errors,
      completedAt: new Date(),
      duration,
    };

    this.dispatchEvent(
      new CustomEvent('session-complete', {
        detail: session,
        bubbles: true,
        composed: true,
      })
    );

    this.requestUpdate();
  }

  private reset() {
    this.typingState = {
      currentIndex: 0,
      startTime: null,
      endTime: null,
      errors: [],
      isComplete: false,
      wpm: 0,
      accuracy: 100,
    };
    this.userInput = '';
    this.liveWpm = 0;
    this.liveAccuracy = 100;

    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }

    this.requestUpdate();
  }

  private renderChar(char: string, index: number) {
    const { currentIndex } = this.typingState;

    let className = '';
    if (index < currentIndex) {
      // Check if this character was typed correctly
      const userChar = this.userInput[index];
      className = userChar === char ? 'correct' : 'incorrect';
    } else if (index === currentIndex) {
      className = 'current';
    }

    return html`<span class="char ${className}">${char === ' ' ? '\u00A0' : char}</span>`;
  }

  private renderCompletion() {
    const grade = StatsCalculator.calculateGrade(
      this.typingState.wpm,
      this.typingState.accuracy
    );

    const duration = this.typingState.endTime && this.typingState.startTime
      ? (this.typingState.endTime - this.typingState.startTime) / 1000
      : 0;

    return html`
      <div class="completion-message">
        <h3>🎉 Typing Complete!</h3>
        <div class="grade" style="color: ${grade.color}">
          Grade: ${grade.grade}
        </div>
        <div class="completion-stats">
          <div class="completion-stat">
            <div class="stat-value">${this.typingState.wpm}</div>
            <div class="stat-label">WPM</div>
          </div>
          <div class="completion-stat">
            <div class="stat-value">${this.typingState.accuracy}%</div>
            <div class="stat-label">Accuracy</div>
          </div>
          <div class="completion-stat">
            <div class="stat-value">${StatsCalculator.formatDuration(duration)}</div>
            <div class="stat-label">Time</div>
          </div>
          <div class="completion-stat">
            <div class="stat-value">${this.typingState.errors.length}</div>
            <div class="stat-label">Errors</div>
          </div>
        </div>
        <div class="actions">
          <button class="primary" @click=${this.reset}>Try Again</button>
          <button class="secondary" @click=${() => this.dispatchEvent(new CustomEvent('back-to-menu', { bubbles: true, composed: true }))}>
            Back to Menu
          </button>
        </div>
      </div>
    `;
  }

  render() {
    if (!this.textData) {
      return html`<div>No text selected</div>`;
    }

    return html`
      <div class="typing-container">
        <div class="text-info">
          <h2>${this.textData.title}</h2>
          ${this.textData.author ? html`<div class="author">by ${this.textData.author}</div>` : ''}
        </div>

        ${!this.typingState.isComplete ? html`
          <div class="stats-bar">
            <div class="stat">
              <div class="stat-value">${this.liveWpm}</div>
              <div class="stat-label">WPM</div>
            </div>
            <div class="stat">
              <div class="stat-value">${this.liveAccuracy}%</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat">
              <div class="stat-value">${this.typingState.errors.length}</div>
              <div class="stat-label">Errors</div>
            </div>
          </div>

          <div class="text-display">
            ${this.textData.content.split('').map((char, i) => this.renderChar(char, i))}
          </div>

          ${this.typingState.startTime === null ? html`
            <div class="instructions">
              Click here and start typing to begin...
            </div>
          ` : ''}
        ` : this.renderCompletion()}
      </div>
    `;
  }
}
