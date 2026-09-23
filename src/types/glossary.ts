export type GlossaryCategory = 
  | 'ʿAqīdah'
  | 'Manhaj'
  | 'Ḥadīth'
  | 'Uṣūl'
  | 'Sects & Groups'
  | 'Heart-Softeners'
  | 'General';

export interface GlossaryTerm {
  id: string;
  term: string;
  arabic?: string;
  transliteration?: string;
  category: GlossaryCategory;
  definition: string;
  context?: string; // Additional context or sayings of the Salaf
  aliases?: string[]; // Alternative spellings or variations (e.g. ["taweel", "ta'weel", "tawil"])
  source?: string; // Primary source reference
  isCustom?: boolean; // Set to true if added by user
}
