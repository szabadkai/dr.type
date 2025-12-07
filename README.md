# dr.type

Modern typing trainer built with Vite + TypeScript + Lit. Practice with curated literature passages, targeted drills, or your own uploads, track accuracy/WPM over time, and explore a built‑in reading mode that can slice books into chunks for practice.

## Features
- Typing sessions with live WPM/accuracy, error highlighting, and per-session summary charts.
- Space-to-skip: hit space mid-word to jump to the next word (skipped chars count as errors).
- Leveling system that unlocks new texts; progress is saved locally (LocalStorage).
- Random practice generator plus upload/import for custom texts.
- Reading mode with book chunking, search/download, and export/import of your library.
- Theme selector and keyboard-first flow (start typing to begin, backspace to correct).

## Getting started
Requirements: Node 18+ (or any version supported by your local environment) and npm.

```bash
npm install
npm run dev
```

Open the printed local dev URL (default: http://localhost:5173). To build for production:

```bash
npm run build
```

## Usage notes
- Start typing to begin a session; backspace removes the last character.
- Press space while inside a word to jump to the next word; the skipped characters are recorded as errors so stats stay honest.
- Progress, sessions, custom texts, and reading library data are stored in the browser’s LocalStorage.
- Upload plain text files or paste text to create custom practice passages; difficulty is suggested automatically.
- Reading mode can fetch from Project Gutenberg; if offline/restricted, you can still upload files.

## Project structure
- `src/components/` – Lit web components (typing area, text selector, user progress, reading mode, theme selector, etc.).
- `src/services/` – Data and utility services (stats calculation, storage, text manager, reading service, level progression).
- `src/data/` – Built-in texts and word lists for drills.
- `src/styles/` – Theme helpers and global styles.

## Scripts
- `npm run dev` – Start Vite dev server.
- `npm run build` – Type-check then build for production.
- `npm run preview` – Preview the production build locally.

## Tech stack
Vite · TypeScript · Lit · Chart.js
