import type { LevelConfig, UserProgress, TypingSession } from '../types';
import { textManager } from './TextManager';
import { storageService } from './StorageService';

/**
 * Service for managing level progression and text unlocking
 */
class LevelProgressionService {
  private levelConfigs: LevelConfig[] = [
    {
      level: 1,
      requiredCompletedTexts: 0,
      unlocksTexts: ['pride-prejudice-1', 'gatsby-1', 'alice-1'],
      title: 'Novice Typist',
      description: 'Start your typing journey with beginner-friendly classics',
    },
    {
      level: 2,
      requiredCompletedTexts: 2,
      unlocksTexts: ['sherlock-1', 'tale-two-cities-1'],
      title: 'Apprentice Typist',
      description: 'Unlock slightly more challenging texts',
    },
    {
      level: 3,
      requiredCompletedTexts: 4,
      unlocksTexts: ['moby-dick-1', 'frankenstein-1'],
      title: 'Skilled Typist',
      description: 'Progress to medium difficulty literature',
    },
    {
      level: 4,
      requiredCompletedTexts: 6,
      unlocksTexts: ['jekyll-hyde-1', 'wuthering-heights-1'],
      title: 'Expert Typist',
      description: 'Master harder texts with complex vocabulary',
    },
    {
      level: 5,
      requiredCompletedTexts: 8,
      unlocksTexts: ['dracula-1', 'picture-dorian-gray-1'],
      title: 'Master Typist',
      description: 'Challenge yourself with expert-level passages',
    },
    {
      level: 6,
      requiredCompletedTexts: 10,
      unlocksTexts: ['metamorphosis-1'],
      title: 'Grandmaster Typist',
      description: 'You\'ve achieved the highest level of typing mastery!',
    },
  ];

  /**
   * Get all level configurations
   */
  getLevelConfigs(): LevelConfig[] {
    return this.levelConfigs;
  }

  /**
   * Get configuration for a specific level
   */
  getLevelConfig(level: number): LevelConfig | undefined {
    return this.levelConfigs.find(config => config.level === level);
  }

  /**
   * Calculate current level based on completed texts
   */
  calculateLevel(completedTextIds: Set<string>): number {
    const completedCount = completedTextIds.size;

    // Find the highest level the user has reached
    for (let i = this.levelConfigs.length - 1; i >= 0; i--) {
      if (completedCount >= this.levelConfigs[i].requiredCompletedTexts) {
        return this.levelConfigs[i].level;
      }
    }

    return 1; // Default to level 1
  }

  /**
   * Get all unlocked text IDs based on current level
   */
  getUnlockedTextIds(level: number): string[] {
    const unlockedIds: string[] = [];

    // Add all texts from levels up to and including current level
    for (const config of this.levelConfigs) {
      if (config.level <= level) {
        unlockedIds.push(...config.unlocksTexts);
      }
    }

    // Add all custom texts (always unlocked)
    const customTexts = textManager.getCustomTexts();
    unlockedIds.push(...customTexts.map(text => text.id));

    // Add all training drills (always unlocked)
    const trainingTexts = textManager.getAllTexts().filter(text => text.category === 'training');
    unlockedIds.push(...trainingTexts.map(text => text.id));

    return Array.from(new Set(unlockedIds));
  }

  /**
   * Check if a text is unlocked for the user
   */
  isTextUnlocked(textId: string, userLevel: number): boolean {
    const unlockedIds = this.getUnlockedTextIds(userLevel);
    return unlockedIds.includes(textId);
  }

  /**
   * Update user progress after completing a session
   * Returns true if user leveled up
   */
  updateProgress(session: TypingSession): boolean {
    if (session.mode === 'reading') {
      return false;
    }

    const progress = storageService.getUserProgress();
    if (!progress) return false;

    // Get unique completed text IDs
    const completedTextIds = new Set(
      progress.sessions
        .filter(s => s.mode !== 'reading')
        .map(s => s.textId)
    );
    completedTextIds.add(session.textId);

    // Calculate new level
    const oldLevel = progress.level;
    const newLevel = this.calculateLevel(completedTextIds);

    // Check if leveled up
    const leveledUp = newLevel > oldLevel;

    if (leveledUp) {
      // Update unlocked texts
      const unlockedTexts = this.getUnlockedTextIds(newLevel);
      storageService.updateLevelProgress(newLevel, unlockedTexts);
    }

    return leveledUp;
  }

  /**
   * Get progress to next level
   */
  getProgressToNextLevel(progress: UserProgress): {
    currentLevel: number;
    nextLevel: number | null;
    completedTexts: number;
    requiredTexts: number;
    percentage: number;
  } {
    const currentLevel = progress.level;
    const completedTextIds = new Set(
      progress.sessions
        .filter(s => s.mode !== 'reading')
        .map(s => s.textId)
    );
    const completedCount = completedTextIds.size;

    const nextLevelConfig = this.levelConfigs.find(
      config => config.level === currentLevel + 1
    );

    if (!nextLevelConfig) {
      // Max level reached
      return {
        currentLevel,
        nextLevel: null,
        completedTexts: completedCount,
        requiredTexts: completedCount,
        percentage: 100,
      };
    }

    const requiredTexts = nextLevelConfig.requiredCompletedTexts;
    const percentage = Math.round((completedCount / requiredTexts) * 100);

    return {
      currentLevel,
      nextLevel: nextLevelConfig.level,
      completedTexts: completedCount,
      requiredTexts,
      percentage: Math.min(percentage, 100),
    };
  }

  /**
   * Get texts that will be unlocked at next level
   */
  getNextLevelUnlocks(currentLevel: number): string[] {
    const nextLevelConfig = this.levelConfigs.find(
      config => config.level === currentLevel + 1
    );

    return nextLevelConfig ? nextLevelConfig.unlocksTexts : [];
  }

  /**
   * Initialize user progress with starting texts
   */
  initializeProgress(): UserProgress {
    storageService.initializeUserProgress();

    // Unlock level 1 texts
    const unlockedTexts = this.getUnlockedTextIds(1);
    storageService.updateLevelProgress(1, unlockedTexts);

    return storageService.getUserProgress()!;
  }

  /**
   * Check if user has completed a specific text
   */
  hasCompletedText(textId: string, sessions: TypingSession[]): boolean {
    return sessions.some(session => session.textId === textId);
  }

  /**
   * Get best session for a specific text
   */
  getBestSession(textId: string, sessions: TypingSession[]): TypingSession | null {
    const textSessions = sessions.filter((s: TypingSession) => s.textId === textId);
    if (textSessions.length === 0) return null;

    return textSessions.reduce((best: TypingSession, current: TypingSession) =>
      current.wpm > best.wpm ? current : best
    );
  }
}

// Export singleton instance
export const levelProgressionService = new LevelProgressionService();
