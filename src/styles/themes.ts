/**
 * Minimal color themes inspired by monkeytype
 */

export interface Theme {
  name: string;
  bg: string;
  mainColor: string;
  subColor: string;
  textColor: string;
  errorColor: string;
  errorExtraColor: string;
  colorfulErrorColor: string;
  colorfulErrorExtraColor: string;
}

export const themes: Record<string, Theme> = {
  serika: {
    name: 'serika',
    bg: '#323437',
    mainColor: '#e2b714',
    subColor: '#646669',
    textColor: '#d1d0c5',
    errorColor: '#ca4754',
    errorExtraColor: '#7e2a33',
    colorfulErrorColor: '#ca4754',
    colorfulErrorExtraColor: '#7e2a33',
  },

  dark: {
    name: 'dark',
    bg: '#2c2e31',
    mainColor: '#e2b714',
    subColor: '#646669',
    textColor: '#d1d0c5',
    errorColor: '#ca4754',
    errorExtraColor: '#7e2a33',
    colorfulErrorColor: '#ca4754',
    colorfulErrorExtraColor: '#7e2a33',
  },

  light: {
    name: 'light',
    bg: '#f5f5f5',
    mainColor: '#e2b714',
    subColor: '#8c8c8c',
    textColor: '#323437',
    errorColor: '#ca4754',
    errorExtraColor: '#7e2a33',
    colorfulErrorColor: '#ca4754',
    colorfulErrorExtraColor: '#7e2a33',
  },

  Nord: {
    name: 'nord',
    bg: '#2e3440',
    mainColor: '#88c0d0',
    subColor: '#4c566a',
    textColor: '#d8dee9',
    errorColor: '#bf616a',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#bf616a',
    colorfulErrorExtraColor: '#a02836',
  },

  dracula: {
    name: 'dracula',
    bg: '#282a36',
    mainColor: '#bd93f9',
    subColor: '#6272a4',
    textColor: '#f8f8f2',
    errorColor: '#ff5555',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#ff5555',
    colorfulErrorExtraColor: '#a02836',
  },

  gruvbox: {
    name: 'gruvbox',
    bg: '#282828',
    mainColor: '#fabd2f',
    subColor: '#504945',
    textColor: '#ebdbb2',
    errorColor: '#fb4934',
    errorExtraColor: '#cc241d',
    colorfulErrorColor: '#fb4934',
    colorfulErrorExtraColor: '#cc241d',
  },

  monokai: {
    name: 'monokai',
    bg: '#272822',
    mainColor: '#e6db74',
    subColor: '#75715e',
    textColor: '#f8f8f2',
    errorColor: '#f92672',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#f92672',
    colorfulErrorExtraColor: '#a02836',
  },
};

export const defaultTheme = 'serika';

/**
 * Apply theme to document root
 */
export function applyTheme(themeName: string) {
  const theme = themes[themeName] || themes[defaultTheme];
  const root = document.documentElement;

  root.style.setProperty('--bg-color', theme.bg);
  root.style.setProperty('--main-color', theme.mainColor);
  root.style.setProperty('--sub-color', theme.subColor);
  root.style.setProperty('--text-color', theme.textColor);
  root.style.setProperty('--error-color', theme.errorColor);
  root.style.setProperty('--error-extra-color', theme.errorExtraColor);

  // Save to localStorage
  localStorage.setItem('drtype_theme', themeName);
}

/**
 * Load saved theme or default
 */
export function loadTheme() {
  const savedTheme = localStorage.getItem('drtype_theme') || defaultTheme;
  applyTheme(savedTheme);
  return savedTheme;
}
