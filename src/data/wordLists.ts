/**
 * Word lists for random text generation
 * Based on most common English words
 */

export const commonWords = [
  'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I',
  'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
  'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',
  'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
  'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
  'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take',
  'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other',
  'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also',
  'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way',
  'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us',
];

export const mediumWords = [
  'world', 'school', 'still', 'try', 'last', 'ask', 'need', 'too', 'feel', 'three',
  'state', 'never', 'become', 'between', 'high', 'something', 'both', 'country', 'under', 'problem',
  'eye', 'hand', 'place', 'case', 'week', 'company', 'system', 'each', 'right', 'program',
  'hear', 'question', 'during', 'play', 'government', 'run', 'small', 'number', 'off', 'always',
  'move', 'night', 'live', 'point', 'believe', 'hold', 'today', 'bring', 'happen', 'next',
  'without', 'before', 'large', 'million', 'must', 'home', 'big', 'give', 'water', 'room',
  'mother', 'area', 'money', 'story', 'fact', 'month', 'different', 'right', 'study', 'book',
  'word', 'though', 'business', 'issue', 'side', 'kind', 'head', 'house', 'service', 'friend',
  'power', 'hour', 'game', 'line', 'end', 'member', 'law', 'car', 'city', 'community',
  'name', 'president', 'team', 'minute', 'idea', 'kid', 'body', 'information', 'nothing', 'ago',
];

export const hardWords = [
  'necessary', 'particular', 'environment', 'professional', 'significant', 'understand', 'individual', 'important', 'development', 'opportunity',
  'experience', 'education', 'themselves', 'available', 'difficult', 'together', 'following', 'possible', 'interest', 'everything',
  'remember', 'something', 'attention', 'beautiful', 'difference', 'morning', 'evening', 'language', 'although', 'according',
  'question', 'research', 'traditional', 'technology', 'political', 'operation', 'situation', 'financial', 'especially', 'production',
  'scientific', 'structure', 'authority', 'knowledge', 'economic', 'physical', 'executive', 'relationship', 'performance', 'investment',
  'discussion', 'continue', 'recognize', 'response', 'commercial', 'cultural', 'democratic', 'international', 'organization', 'generation',
  'population', 'determine', 'represent', 'establish', 'successful', 'treatment', 'throughout', 'statement', 'contribute', 'background',
  'increase', 'therefore', 'strategy', 'evidence', 'decision', 'activity', 'magazine', 'standard', 'agreement', 'indicate',
  'approach', 'position', 'behavior', 'maintain', 'probably', 'necessary', 'security', 'influence', 'character', 'responsibility',
  'analysis', 'discover', 'thousand', 'director', 'resource', 'appropriate', 'corporation', 'yesterday', 'tomorrow', 'department',
];

export const punctuationWords = [
  'hello,', 'world!', 'yes?', 'no.', "it's", "don't", "can't", "won't", "I'm", "you're",
  'said:', 'asked;', '(maybe)', '[note]', 'really?!', '"yes"', "'no'", 'however,', 'therefore;', 'but,',
];

/**
 * Generate random text with specified number of words
 */
export function generateRandomText(
  wordCount: number,
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed' = 'mixed',
  includePunctuation: boolean = false
): string {
  let wordPool: string[];

  switch (difficulty) {
    case 'easy':
      wordPool = commonWords;
      break;
    case 'medium':
      wordPool = mediumWords;
      break;
    case 'hard':
      wordPool = hardWords;
      break;
    case 'mixed':
    default:
      wordPool = [...commonWords, ...mediumWords, ...hardWords];
      break;
  }

  const words: string[] = [];

  for (let i = 0; i < wordCount; i++) {
    // Add punctuation occasionally if enabled
    if (includePunctuation && Math.random() < 0.15) {
      const punctWord = punctuationWords[Math.floor(Math.random() * punctuationWords.length)];
      words.push(punctWord);
    } else {
      const word = wordPool[Math.floor(Math.random() * wordPool.length)];
      words.push(word);
    }
  }

  return words.join(' ');
}
