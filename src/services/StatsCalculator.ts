import type { CharError } from '../types';

/**
 * Service for calculating typing statistics
 */
export class StatsCalculator {
  /**
   * Calculate Words Per Minute (WPM)
   * Standard: 1 word = 5 characters
   */
  static calculateWPM(
    charactersTyped: number,
    timeInSeconds: number,
    errors: number = 0
  ): number {
    if (timeInSeconds === 0) return 0;

    const timeInMinutes = timeInSeconds / 60;
    const grossWPM = charactersTyped / 5 / timeInMinutes;
    const netWPM = Math.max(0, grossWPM - errors / timeInMinutes);

    return Math.round(netWPM);
  }

  /**
   * Calculate raw WPM (without error penalty)
   */
  static calculateRawWPM(charactersTyped: number, timeInSeconds: number): number {
    if (timeInSeconds === 0) return 0;

    const timeInMinutes = timeInSeconds / 60;
    const rawWPM = charactersTyped / 5 / timeInMinutes;

    return Math.round(rawWPM);
  }

  /**
   * Calculate accuracy percentage
   */
  static calculateAccuracy(totalCharacters: number, errors: number): number {
    if (totalCharacters === 0) return 100;

    const accuracy = ((totalCharacters - errors) / totalCharacters) * 100;
    return Math.round(accuracy * 100) / 100; // Round to 2 decimal places
  }

  /**
   * Calculate real-time WPM based on current progress
   */
  static calculateLiveWPM(
    currentIndex: number,
    startTime: number,
    errors: CharError[]
  ): number {
    const now = Date.now();
    const elapsedSeconds = (now - startTime) / 1000;

    return this.calculateWPM(currentIndex, elapsedSeconds, errors.length);
  }

  /**
   * Calculate real-time accuracy
   */
  static calculateLiveAccuracy(currentIndex: number, errors: CharError[]): number {
    if (currentIndex === 0) return 100;
    return this.calculateAccuracy(currentIndex, errors.length);
  }

  /**
   * Analyze error patterns and return most common mistakes
   */
  static analyzeErrors(errors: CharError[]): Map<string, number> {
    const errorMap = new Map<string, number>();

    errors.forEach(error => {
      const key = error.expected;
      errorMap.set(key, (errorMap.get(key) || 0) + 1);
    });

    return errorMap;
  }

  /**
   * Get top N most common errors
   */
  static getTopErrors(
    errors: CharError[],
    limit: number = 5
  ): Array<{ char: string; count: number; percentage: number }> {
    const errorMap = this.analyzeErrors(errors);

    const sorted = Array.from(errorMap.entries())
      .map(([char, count]) => ({
        char,
        count,
        percentage: Math.round((count / errors.length) * 100),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);

    return sorted;
  }

  /**
   * Calculate typing consistency (coefficient of variation of inter-keystroke intervals)
   * Lower is more consistent
   */
  static calculateConsistency(errors: CharError[]): number {
    if (errors.length < 2) return 100;

    const intervals: number[] = [];
    for (let i = 1; i < errors.length; i++) {
      intervals.push(errors[i].timestamp - errors[i - 1].timestamp);
    }

    const mean = intervals.reduce((sum, val) => sum + val, 0) / intervals.length;
    const variance =
      intervals.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / intervals.length;
    const stdDev = Math.sqrt(variance);

    const cv = (stdDev / mean) * 100;
    return Math.round(100 - Math.min(cv, 100)); // Invert so higher is better
  }

  /**
   * Calculate grade/rating based on WPM and accuracy
   */
  static calculateGrade(wpm: number, accuracy: number): {
    grade: string;
    color: string;
  } {
    // Accuracy must be at least 95% for top grades
    if (accuracy >= 98 && wpm >= 80) {
      return { grade: 'S', color: '#FFD700' }; // Gold
    } else if (accuracy >= 96 && wpm >= 60) {
      return { grade: 'A', color: '#00D084' }; // Green
    } else if (accuracy >= 94 && wpm >= 40) {
      return { grade: 'B', color: '#4A9EFF' }; // Blue
    } else if (accuracy >= 90 && wpm >= 25) {
      return { grade: 'C', color: '#FFA500' }; // Orange
    } else {
      return { grade: 'D', color: '#FF4444' }; // Red
    }
  }

  /**
   * Format time duration in MM:SS format
   */
  static formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  /**
   * Calculate estimated completion time based on current pace
   */
  static estimateCompletionTime(
    currentIndex: number,
    totalLength: number,
    elapsedSeconds: number
  ): number {
    if (currentIndex === 0) return 0;

    const charsPerSecond = currentIndex / elapsedSeconds;
    const remainingChars = totalLength - currentIndex;
    const estimatedSeconds = remainingChars / charsPerSecond;

    return Math.round(estimatedSeconds);
  }
}
