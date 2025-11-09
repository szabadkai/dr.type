import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { themes, applyTheme, loadTheme } from '../styles/themes';

@customElement('theme-selector')
export class ThemeSelector extends LitElement {
  @state() private currentTheme: string = 'serika';
  @state() private isOpen: boolean = false;

  static styles = css`
    :host {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
    }

    .theme-button {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      border: none;
      background: var(--main-color);
      color: var(--bg-color);
      font-size: 1.25rem;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .theme-button:hover {
      transform: scale(1.1);
    }

    .theme-menu {
      position: absolute;
      bottom: 4rem;
      right: 0;
      background: var(--bg-color);
      border: 1px solid var(--sub-color);
      border-radius: 8px;
      padding: 0.5rem;
      min-width: 150px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .theme-option {
      display: block;
      width: 100%;
      padding: 0.75rem 1rem;
      border: none;
      background: none;
      color: var(--sub-color);
      text-align: left;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.875rem;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .theme-option:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-color);
    }

    .theme-option.active {
      color: var(--main-color);
      background: rgba(226, 183, 20, 0.1);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.currentTheme = loadTheme();
  }

  private toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  private selectTheme(themeName: string) {
    this.currentTheme = themeName;
    applyTheme(themeName);
    this.isOpen = false;
  }

  render() {
    return html`
      <button class="theme-button" @click=${this.toggleMenu} title="Change theme">
        🎨
      </button>

      ${this.isOpen ? html`
        <div class="theme-menu">
          ${Object.keys(themes).map(themeName => html`
            <button
              class="theme-option ${this.currentTheme === themeName ? 'active' : ''}"
              @click=${() => this.selectTheme(themeName)}
            >
              ${themes[themeName].name}
            </button>
          `)}
        </div>
      ` : ''}
    `;
  }
}
