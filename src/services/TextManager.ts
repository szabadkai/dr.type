import type { TextContent } from '../types';
import { Difficulty } from '../types';
import { classicLiterature } from '../data/literature';
import { storageService } from './StorageService';

/**
 * Service for managing text content (literature + custom texts)
 */
class TextManager {
  private allTexts: Map<string, TextContent> = new Map();

  constructor() {
    this.loadTexts();
  }

  /**
   * Load all texts (literature + custom)
   */
  private loadTexts(): void {
    // Load classic literature
    classicLiterature.forEach(text => {
      this.allTexts.set(text.id, text);
    });

    // Load custom texts from storage
    const customTexts = storageService.getCustomTexts();
    customTexts.forEach(text => {
      this.allTexts.set(text.id, text);
    });
  }

  /**
   * Get all available texts
   */
  getAllTexts(): TextContent[] {
    return Array.from(this.allTexts.values());
  }

  /**
   * Get text by ID
   */
  getTextById(id: string): TextContent | undefined {
    return this.allTexts.get(id);
  }

  /**
   * Get texts by difficulty level
   */
  getTextsByDifficulty(difficulty: Difficulty): TextContent[] {
    return this.getAllTexts().filter(text => text.difficulty === difficulty);
  }

  /**
   * Get texts by required level
   */
  getTextsByRequiredLevel(level: number): TextContent[] {
    return this.getAllTexts().filter(text => text.requiredLevel === level);
  }

  /**
   * Get texts that user has unlocked
   */
  getUnlockedTexts(unlockedTextIds: string[]): TextContent[] {
    return unlockedTextIds
      .map(id => this.allTexts.get(id))
      .filter((text): text is TextContent => text !== undefined);
  }

  /**
   * Get texts that are still locked
   */
  getLockedTexts(unlockedTextIds: string[]): TextContent[] {
    const unlockedSet = new Set(unlockedTextIds);
    return this.getAllTexts().filter(text => !unlockedSet.has(text.id));
  }

  /**
   * Add custom text from file upload
   */
  addCustomText(
    title: string,
    content: string,
    author?: string,
    difficulty: Difficulty = Difficulty.Medium
  ): TextContent {
    // Generate unique ID
    const id = `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Count words
    const wordCount = content.trim().split(/\s+/).length;

    const customText: TextContent = {
      id,
      title,
      author,
      content: content.trim(),
      difficulty,
      requiredLevel: 1, // Custom texts are always available
      category: 'custom',
      wordCount,
    };

    // Save to storage
    storageService.saveCustomText(customText);

    // Add to in-memory map
    this.allTexts.set(id, customText);

    return customText;
  }

  /**
   * Delete custom text
   */
  deleteCustomText(textId: string): boolean {
    const text = this.allTexts.get(textId);
    if (!text || text.category !== 'custom') {
      return false;
    }

    storageService.deleteCustomText(textId);
    this.allTexts.delete(textId);
    return true;
  }

  /**
   * Get all custom texts
   */
  getCustomTexts(): TextContent[] {
    return this.getAllTexts().filter(text => text.category === 'custom');
  }

  /**
   * Get all literature texts
   */
  getLiteratureTexts(): TextContent[] {
    return this.getAllTexts().filter(text => text.category === 'literature');
  }

  /**
   * Parse text file content
   */
  parseTextFile(fileContent: string): { content: string; wordCount: number } {
    const cleaned = fileContent.trim();
    const wordCount = cleaned.split(/\s+/).length;
    return { content: cleaned, wordCount };
  }

  /**
   * Suggest difficulty based on text characteristics
   */
  suggestDifficulty(content: string): Difficulty {
    const wordCount = content.split(/\s+/).length;
    const avgWordLength =
      content.split(/\s+/).reduce((sum, word) => sum + word.length, 0) / wordCount;

    // Simple heuristic based on length and word complexity
    if (wordCount < 60 && avgWordLength < 5) return Difficulty.Beginner;
    if (wordCount < 80 && avgWordLength < 6) return Difficulty.Easy;
    if (wordCount < 100 && avgWordLength < 7) return Difficulty.Medium;
    if (wordCount < 120) return Difficulty.Hard;
    return Difficulty.Expert;
  }

  /**
   * Reload texts from storage (useful after import/export)
   */
  reload(): void {
    this.allTexts.clear();
    this.loadTexts();
  }
}

// Export singleton instance
export const textManager = new TextManager();
