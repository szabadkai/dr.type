import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { UserProgress } from '../types';
import { levelProgressionService } from '../services/LevelProgressionService';

@customElement('user-progress')
export class UserProgressComponent extends LitElement {
  @property({ type: Object }) progress?: UserProgress;

  static styles = css`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto 2rem;
      padding: 1rem;
      border-bottom: 1px solid var(--sub-color);
      opacity: 0.5;
    }

    .progress-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .level-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.875rem;
      color: var(--sub-color);
    }

    .level-badge {
      color: var(--main-color);
      font-weight: 500;
    }

    .stats {
      display: flex;
      gap: 2rem;
      font-size: 0.875rem;
      color: var(--sub-color);
    }

    .stat-value {
      color: var(--text-color);
      font-weight: 500;
      margin-right: 0.25rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
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

    .progress-bar {
      flex: 1;
      min-width: 200px;
      max-width: 400px;
    }

    .progress-bar-track {
      height: 4px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-bar-fill {
      height: 100%;
      background: var(--main-color);
      transition: width 0.3s ease;
    }

    .progress-label {
      font-size: 0.75rem;
      color: var(--sub-color);
      margin-top: 0.25rem;
    }
  `;

  private handleExport() {
    this.dispatchEvent(
      new CustomEvent('export-data', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    if (!this.progress) {
      return html``;
    }

    const levelConfig = levelProgressionService.getLevelConfig(this.progress.level);
    const progressToNext = levelProgressionService.getProgressToNextLevel(this.progress);

    return html`
      <div class="progress-container">
        <div class="level-info">
          <span class="level-badge">level ${this.progress.level}</span>
          <span>${levelConfig?.title || ''}</span>
        </div>

        ${progressToNext.nextLevel !== null ? html`
          <div class="progress-bar">
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${progressToNext.percentage}%"></div>
            </div>
            <div class="progress-label">
              ${progressToNext.completedTexts} / ${progressToNext.requiredTexts} to level ${progressToNext.nextLevel}
            </div>
          </div>
        ` : ''}

        <div class="stats">
          <div class="stat">
            <span class="stat-value">${this.progress.stats.averageWpm.toFixed(0)}</span>
            <span>avg wpm</span>
          </div>
          <div class="stat">
            <span class="stat-value">${this.progress.stats.bestWpm}</span>
            <span>best</span>
          </div>
          <div class="stat">
            <span class="stat-value">${this.progress.stats.totalSessions}</span>
            <span>tests</span>
          </div>
        </div>

        <div class="actions">
          <button @click=${this.handleExport} title="Export data">💾</button>
        </div>
      </div>
    `;
  }
}
