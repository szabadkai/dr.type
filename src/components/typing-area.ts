import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { CharError, TypingState, TextContent, TypingSession } from '../types';
import { StatsCalculator } from '../services/StatsCalculator';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

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
  private wpmHistory: Array<{ time: number; wpm: number; raw: number }> = [];
  private chart?: Chart;

  static styles = css`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .text-info {
      text-align: center;
      margin-bottom: 3rem;
      color: var(--sub-color);
    }

    .text-info h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color);
    }

    .text-info .author {
      font-size: 0.875rem;
      opacity: 0.7;
    }

    .stats-bar {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-bottom: 3rem;
      color: var(--sub-color);
      font-size: 0.875rem;
    }

    .stat-value {
      font-size: 1.5rem;
      color: var(--main-color);
      font-weight: 500;
      margin-right: 0.25rem;
    }

    .stat-label {
      opacity: 0.7;
    }

    .text-display {
      font-family: 'Roboto Mono', monospace;
      font-size: 1.5rem;
      line-height: 2.5rem;
      margin: 0 auto 2rem;
      max-width: 900px;
      user-select: none;
      color: var(--sub-color);
    }

    .word {
      display: inline-block;
      margin-right: 0.5rem;
    }

    .char {
      display: inline-block;
    }

    .char.correct {
      color: var(--text-color);
    }

    .char.incorrect {
      color: var(--error-color);
    }

    .char.current {
      position: relative;
    }

    .char.current::before {
      content: '';
      position: absolute;
      left: -2px;
      top: 0;
      width: 2px;
      height: 100%;
      background: var(--main-color);
      animation: blink 1s infinite;
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .completion {
      text-align: center;
      padding: 2rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .completion h3 {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--main-color);
      margin-bottom: 2rem;
    }

    .graph-container {
      margin-bottom: 2rem;
      background: rgba(255, 255, 255, 0.02);
      padding: 1.5rem;
      border-radius: 8px;
    }

    canvas {
      max-height: 250px;
    }

    .completion-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .completion-stat {
      text-align: center;
    }

    .completion-stat-value {
      font-size: 2rem;
      color: var(--main-color);
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    .completion-stat-label {
      font-size: 0.875rem;
      color: var(--sub-color);
    }

    .actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    button {
      padding: 0.75rem 1.5rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: none;
      background: none;
      color: var(--sub-color);
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }

    button:hover {
      color: var(--text-color);
      background: rgba(255, 255, 255, 0.05);
    }

    .primary {
      color: var(--main-color);
    }

    .primary:hover {
      background: rgba(226, 183, 20, 0.1);
    }

    .instructions {
      text-align: center;
      color: var(--sub-color);
      font-size: 0.875rem;
      margin-top: 2rem;
      opacity: 0.7;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.handleKeyDown);
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (!this.textData || this.typingState.isComplete) return;

    if (this.typingState.startTime === null) {
      this.typingState = {
        ...this.typingState,
        startTime: Date.now(),
      };
      this.startLiveUpdates();
    }

    const char = e.key;
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

    if (!isCorrect) {
      const error: CharError = {
        charIndex: this.typingState.currentIndex,
        expected: expectedChar,
        typed: char,
        timestamp: Date.now(),
      };
      this.typingState.errors.push(error);
    }

    this.userInput += char;
    this.typingState.currentIndex++;

    if (this.typingState.currentIndex >= this.textData.content.length) {
      this.completeTyping();
    }

    this.requestUpdate();
  }

  private handleBackspace() {
    if (this.typingState.currentIndex === 0) return;

    this.typingState.currentIndex--;
    this.userInput = this.userInput.slice(0, -1);

    const lastError = this.typingState.errors[this.typingState.errors.length - 1];
    if (lastError && lastError.charIndex === this.typingState.currentIndex) {
      this.typingState.errors.pop();
    }

    this.requestUpdate();
  }

  private startLiveUpdates() {
    this.updateInterval = window.setInterval(() => {
      if (this.typingState.startTime && !this.typingState.isComplete) {
        const elapsedSeconds = (Date.now() - this.typingState.startTime) / 1000;

        this.liveWpm = StatsCalculator.calculateLiveWPM(
          this.typingState.currentIndex,
          this.typingState.startTime,
          this.typingState.errors
        );
        this.liveAccuracy = StatsCalculator.calculateLiveAccuracy(
          this.typingState.currentIndex,
          this.typingState.errors
        );

        // Track WPM every second for the graph
        if (elapsedSeconds >= 1 && (this.wpmHistory.length === 0 || elapsedSeconds - this.wpmHistory[this.wpmHistory.length - 1].time >= 1)) {
          const rawWpm = StatsCalculator.calculateRawWPM(
            this.typingState.currentIndex,
            elapsedSeconds
          );
          this.wpmHistory.push({
            time: Math.floor(elapsedSeconds),
            wpm: this.liveWpm,
            raw: rawWpm
          });
        }

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

    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }

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
    this.wpmHistory = [];

    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }

    if (this.chart) {
      this.chart.destroy();
      this.chart = undefined;
    }

    this.requestUpdate();
  }

  private handleContinue() {
    if (!this.textData?.nextTextId) return;

    this.dispatchEvent(
      new CustomEvent('continue-to-next', {
        detail: this.textData.nextTextId,
        bubbles: true,
        composed: true,
      })
    );
  }

  private renderChar(char: string, index: number) {
    const { currentIndex } = this.typingState;

    let className = '';
    if (index < currentIndex) {
      const userChar = this.userInput[index];
      className = userChar === char ? 'correct' : 'incorrect';
    } else if (index === currentIndex) {
      className = 'current';
    }

    return html`<span class="char ${className}">${char === ' ' ? ' ' : char}</span>`;
  }

  private renderCompletion() {
    const duration = this.typingState.endTime && this.typingState.startTime
      ? (this.typingState.endTime - this.typingState.startTime) / 1000
      : 0;

    // Create chart after render
    setTimeout(() => this.createChart(), 0);

    return html`
      <div class="completion">
        <div class="graph-container">
          <canvas id="wpm-chart"></canvas>
        </div>
        <div class="completion-stats">
          <div class="completion-stat">
            <div class="completion-stat-value">${this.typingState.wpm}</div>
            <div class="completion-stat-label">wpm</div>
          </div>
          <div class="completion-stat">
            <div class="completion-stat-value">${this.typingState.accuracy}%</div>
            <div class="completion-stat-label">acc</div>
          </div>
          <div class="completion-stat">
            <div class="completion-stat-value">${StatsCalculator.formatDuration(duration)}</div>
            <div class="completion-stat-label">time</div>
          </div>
          <div class="completion-stat">
            <div class="completion-stat-value">${this.typingState.errors.length}</div>
            <div class="completion-stat-label">errors</div>
          </div>
        </div>
        <div class="actions">
          ${this.textData?.nextTextId ? html`
            <button class="primary" @click=${this.handleContinue}>
              continue to chapter ${(this.textData?.chapterNumber || 0) + 1}
            </button>
          ` : html`
            <button class="primary" @click=${this.reset}>try again</button>
          `}
          <button @click=${() => this.dispatchEvent(new CustomEvent('back-to-menu', { bubbles: true, composed: true }))}>
            change text
          </button>
        </div>
      </div>
    `;
  }

  private createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const canvas = this.shadowRoot?.querySelector('#wpm-chart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get computed colors from CSS variables
    const styles = getComputedStyle(document.documentElement);
    const mainColor = styles.getPropertyValue('--main-color').trim() || '#e2b714';
    const subColor = styles.getPropertyValue('--sub-color').trim() || '#646669';
    const textColor = styles.getPropertyValue('--text-color').trim() || '#d1d0c5';

    const labels = this.wpmHistory.map(h => h.time);
    const wpmData = this.wpmHistory.map(h => h.wpm);
    const rawData = this.wpmHistory.map(h => h.raw);

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'wpm',
            data: wpmData,
            borderColor: mainColor,
            backgroundColor: mainColor + '20',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointBackgroundColor: mainColor,
            fill: true,
          },
          {
            label: 'raw',
            data: rawData,
            borderColor: subColor,
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointBackgroundColor: subColor,
            borderDash: [5, 5],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: textColor,
              font: {
                family: 'Roboto Mono',
                size: 12,
              },
              boxWidth: 20,
              padding: 15,
            },
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: textColor,
            bodyColor: textColor,
            borderColor: subColor,
            borderWidth: 1,
            padding: 10,
            displayColors: true,
            callbacks: {
              title: (items) => `${items[0].label}s`,
              label: (item) => ` ${item.dataset.label}: ${item.parsed.y}`,
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: subColor + '20',
            },
            ticks: {
              color: subColor,
              font: {
                family: 'Roboto Mono',
                size: 11,
              },
            },
            title: {
              display: true,
              text: 'seconds',
              color: subColor,
              font: {
                family: 'Roboto Mono',
                size: 11,
              },
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: subColor + '20',
            },
            ticks: {
              color: subColor,
              font: {
                family: 'Roboto Mono',
                size: 11,
              },
            },
            title: {
              display: true,
              text: 'wpm',
              color: subColor,
              font: {
                family: 'Roboto Mono',
                size: 11,
              },
            },
          },
        },
      },
    });
  }

  render() {
    if (!this.textData) {
      return html`<div>no text selected</div>`;
    }

    if (this.typingState.isComplete) {
      return this.renderCompletion();
    }

    // Split text into words for better display
    const words = this.textData.content.split(' ');
    let charIndex = 0;

    return html`
      <div class="text-info">
        <h2>${this.textData.title}</h2>
        ${this.textData.author ? html`<div class="author">${this.textData.author}</div>` : ''}
      </div>

      <div class="stats-bar">
        <div class="stat">
          <span class="stat-value">${this.liveWpm}</span>
          <span class="stat-label">wpm</span>
        </div>
        <div class="stat">
          <span class="stat-value">${this.liveAccuracy}</span>
          <span class="stat-label">acc</span>
        </div>
        <div class="stat">
          <span class="stat-value">${this.typingState.errors.length}</span>
          <span class="stat-label">errors</span>
        </div>
      </div>

      <div class="text-display">
        ${words.map((word, wordIdx) => {
          const wordChars = word.split('').map((char) => {
            const idx = charIndex++;
            return this.renderChar(char, idx);
          });

          // Add space after word (except last word)
          if (wordIdx < words.length - 1) {
            const spaceIdx = charIndex++;
            wordChars.push(this.renderChar(' ', spaceIdx));
          }

          return html`<span class="word">${wordChars}</span>`;
        })}
      </div>

      ${this.typingState.startTime === null ? html`
        <div class="instructions">
          start typing to begin
        </div>
      ` : ''}
    `;
  }
}
