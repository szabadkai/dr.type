import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  base: './', // Use relative paths for GitHub Pages
});
