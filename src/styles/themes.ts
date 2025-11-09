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

  nord: {
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

  'solarized-dark': {
    name: 'solarized dark',
    bg: '#002b36',
    mainColor: '#b58900',
    subColor: '#586e75',
    textColor: '#eee8d5',
    errorColor: '#dc322f',
    errorExtraColor: '#7e2a33',
    colorfulErrorColor: '#dc322f',
    colorfulErrorExtraColor: '#7e2a33',
  },

  'solarized-light': {
    name: 'solarized light',
    bg: '#fdf6e3',
    mainColor: '#268bd2',
    subColor: '#93a1a1',
    textColor: '#657b83',
    errorColor: '#dc322f',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#dc322f',
    colorfulErrorExtraColor: '#a02836',
  },

  'one-dark-pro': {
    name: 'one dark pro',
    bg: '#282c34',
    mainColor: '#98c379',
    subColor: '#5c6370',
    textColor: '#abb2bf',
    errorColor: '#e06c75',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#e06c75',
    colorfulErrorExtraColor: '#a02836',
  },

  'night-owl': {
    name: 'night owl',
    bg: '#011627',
    mainColor: '#82aaff',
    subColor: '#5f7e97',
    textColor: '#d6deeb',
    errorColor: '#ef5350',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#ef5350',
    colorfulErrorExtraColor: '#a02836',
  },

  'synthwave-84': {
    name: 'synthwave \'84',
    bg: '#241b2f',
    mainColor: '#f92aad',
    subColor: '#7e5b9a',
    textColor: '#fdf1f5',
    errorColor: '#f97e5b',
    errorExtraColor: '#ff5c7c',
    colorfulErrorColor: '#f97e5b',
    colorfulErrorExtraColor: '#ff5c7c',
  },

  'tokyo-night': {
    name: 'tokyo night',
    bg: '#1a1b26',
    mainColor: '#7aa2f7',
    subColor: '#414868',
    textColor: '#c0caf5',
    errorColor: '#f7768e',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#f7768e',
    colorfulErrorExtraColor: '#a02836',
  },

  cobalt2: {
    name: 'cobalt2',
    bg: '#122738',
    mainColor: '#ff9d00',
    subColor: '#4f97d7',
    textColor: '#f1eff8',
    errorColor: '#ff5486',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#ff5486',
    colorfulErrorExtraColor: '#a02836',
  },

  'material-palenight': {
    name: 'material palenight',
    bg: '#292d3e',
    mainColor: '#89ddff',
    subColor: '#676e95',
    textColor: '#a6accd',
    errorColor: '#f07178',
    errorExtraColor: '#d95763',
    colorfulErrorColor: '#f07178',
    colorfulErrorExtraColor: '#d95763',
  },

  'ayu-mirage': {
    name: 'ayu mirage',
    bg: '#1f2430',
    mainColor: '#ffb454',
    subColor: '#5c6773',
    textColor: '#cbccc6',
    errorColor: '#ff3333',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#ff3333',
    colorfulErrorExtraColor: '#a02836',
  },

  'github-dark': {
    name: 'github dark',
    bg: '#0d1117',
    mainColor: '#2f81f7',
    subColor: '#6e7681',
    textColor: '#e6edf3',
    errorColor: '#f85149',
    errorExtraColor: '#a02836',
    colorfulErrorColor: '#f85149',
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
