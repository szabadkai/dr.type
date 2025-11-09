/**
 * Core type definitions for Dr. Type typing trainer
 */

export const Difficulty = {
  Beginner: 1,
  Easy: 2,
  Medium: 3,
  Hard: 4,
  Expert: 5,
} as const;

export type Difficulty = typeof Difficulty[keyof typeof Difficulty];

export interface CharError {
  charIndex: number;
  expected: string;
  typed: string;
  timestamp: number;
}

export type TypingSessionMode = 'standard' | 'reading';

export interface TypingSessionMeta {
  bookId?: string;
  chunkIndex?: number;
  chunkId?: string;
  chunkRange?: {
    startWord: number;
    endWord: number;
  };
}

export interface TypingSession {
  id: string;
  textId: string;
  wpm: number;
  accuracy: number;
  errors: CharError[];
  completedAt: Date;
  duration: number; // in seconds
  rawWpm: number; // WPM without accounting for errors
  mode?: TypingSessionMode;
  meta?: TypingSessionMeta;
}

export interface TextContent {
  id: string;
  title: string;
  author?: string;
  content: string;
  difficulty: Difficulty;
  requiredLevel: number;
  category: 'literature' | 'custom' | 'training';
  wordCount: number;
  nextTextId?: string; // ID of the next section in the same book
  prevTextId?: string; // ID of the previous section
  bookSeries?: string; // Name of the book series this belongs to
  chapterNumber?: number; // Chapter/section number
  fingerNote?: string; // Guidance for finger positioning
}

export interface OverallStats {
  totalSessions: number;
  averageWpm: number;
  averageAccuracy: number;
  bestWpm: number;
  totalWordsTyped: number;
  totalTimeSeconds: number;
  commonErrors: Map<string, number>; // character -> error count
}

export interface UserProgress {
  level: number;
  unlockedTexts: string[]; // array of text IDs
  sessions: TypingSession[];
  stats: OverallStats;
  createdAt: Date;
  lastUpdated: Date;
}

export interface TypingState {
  currentIndex: number;
  startTime: number | null;
  endTime: number | null;
  errors: CharError[];
  isComplete: boolean;
  wpm: number;
  accuracy: number;
}

export interface LevelConfig {
  level: number;
  requiredCompletedTexts: number;
  unlocksTexts: string[]; // text IDs that unlock at this level
  title: string;
  description: string;
}

export interface BookChunk {
  id: string;
  index: number;
  startWord: number;
  endWord: number;
  wordCount: number;
  content: string;
}

export interface ReadingStats {
  totalSessions: number;
  totalWordsTyped: number;
  totalErrors: number;
  averageWpm: number;
  averageAccuracy: number;
  bestWpm: number;
}

export interface ReadingBookProgress {
  id: string;
  title: string;
  author?: string;
  source: string;
  chunkSize: number;
  totalWords: number;
  totalChunks: number;
  chunks: BookChunk[];
  currentChunkIndex: number;
  completedChunkIds: string[];
  stats: ReadingStats;
  lastUpdated: string;
}

export interface ReadingLibrary {
  activeBookId: string | null;
  books: Record<string, ReadingBookProgress>;
}
