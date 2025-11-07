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
      padding: 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .progress-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .level-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .level-badge {
      font-size: 2.5rem;
      font-weight: bold;
      background: rgba(255, 255, 255, 0.2);
      padding: 0.5rem 1.5rem;
      border-radius: 12px;
    }

    .level-details h2 {
      margin: 0;
      font-size: 1.5rem;
    }

    .level-details p {
      margin: 0.25rem 0 0 0;
      opacity: 0.9;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }

    .stat-card {
      background: rgba(255, 255, 255, 0.2);
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
    }

    .stat-value {
      font-size: 1.75rem;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.875rem;
      opacity: 0.9;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .progress-bar-container {
      margin-top: 1.5rem;
      background: rgba(255, 255, 255, 0.2);
      padding: 1rem;
      border-radius: 8px;
    }

    .progress-bar-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
    }

    .progress-bar {
      height: 24px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 12px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: white;
      border-radius: 12px;
      transition: width 0.5s ease;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 0.5rem;
      font-size: 0.75rem;
      font-weight: bold;
      color: #667eea;
    }

    .actions {
      margin-top: 1rem;
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;
    }

    button {
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s;
    }

    button:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .max-level {
      text-align: center;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      margin-top: 1rem;
      font-size: 1.125rem;
    }
  `;

  private handleViewStats() {
    this.dispatchEvent(
      new CustomEvent('view-stats', {
        bubbles: true,
        composed: true,
      })
    );
  }

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
      return html`<div>Loading...</div>`;
    }

    const levelConfig = levelProgressionService.getLevelConfig(this.progress.level);
    const progressToNext = levelProgressionService.getProgressToNextLevel(this.progress);

    return html`
      <div class="progress-container">
        <div class="progress-header">
          <div class="level-info">
            <div class="level-badge">Lv. ${this.progress.level}</div>
            <div class="level-details">
              <h2>${levelConfig?.title || 'Typist'}</h2>
              <p>${levelConfig?.description || ''}</p>
            </div>
          </div>

          <div class="actions">
            <button @click=${this.handleViewStats}>📊 Stats</button>
            <button @click=${this.handleExport}>💾 Export</button>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${this.progress.stats.averageWpm.toFixed(0)}</div>
            <div class="stat-label">Avg WPM</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.progress.stats.bestWpm}</div>
            <div class="stat-label">Best WPM</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.progress.stats.averageAccuracy.toFixed(1)}%</div>
            <div class="stat-label">Avg Accuracy</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.progress.stats.totalSessions}</div>
            <div class="stat-label">Sessions</div>
          </div>
        </div>

        ${progressToNext.nextLevel !== null
          ? html`
              <div class="progress-bar-container">
                <div class="progress-bar-header">
                  <span>Progress to Level ${progressToNext.nextLevel}</span>
                  <span>${progressToNext.completedTexts} / ${progressToNext.requiredTexts} texts</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${progressToNext.percentage}%">
                    ${progressToNext.percentage}%
                  </div>
                </div>
              </div>
            `
          : html`
              <div class="max-level">
                🏆 Congratulations! You've reached the maximum level!
              </div>
            `}
      </div>
    `;
  }
}
