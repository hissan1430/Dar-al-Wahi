/**
 * Typography Utilities for Classical Islamic & Academic Publishing
 * 
 * Ensures all straight apostrophes, contractions, possessives, and quotation marks
 * are converted into high-grade typographic curly apostrophes (’), single quotes (‘ ’),
 * and double quotes (“ ”).
 */

/**
 * Converts straight apostrophes into curly apostrophes (’)
 * and properly distinguishes opening (‘) vs closing (’) single quotes.
 */
export function toCurlyApostrophes(text: string | null | undefined): string {
  if (!text) return '';

  let result = text;

  // Specific transliteration terms e.g. 'Athar -> ’Athar
  result = result.replace(/(^|[\s(\[{"'])'([Aa]thar)\b/g, '$1’$2');

  // Possessive & Contractions: e.g. al-Ṣafwān's -> al-Ṣafwān’s, one's -> one’s, don't -> don’t
  result = result.replace(/([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF])'([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF])/g, '$1’$2');

  // Plural possessive apostrophes at the end of words: e.g. believers' -> believers’
  result = result.replace(/([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF])'(?=\s|[,.;:!?]|$)/g, '$1’');

  // Opening single quotes: after whitespace, punctuation or brackets followed by non-whitespace
  result = result.replace(/(^|[\s(\[{])'(\S)/g, '$1‘$2');

  // Closing single quotes: after non-whitespace followed by space, punctuation, or string end
  result = result.replace(/(\S)'([\s)\]}.,;!?]|$)/g, '$1’$2');

  // Standalone or remaining straight single quotes
  result = result.replace(/'/g, '’');

  return result;
}

/**
 * Converts straight double quotes and single quotes into proper curly typographic quotes.
 */
export function toCurlyQuotes(text: string | null | undefined): string {
  if (!text) return '';

  let result = text;

  // Double quotes
  result = result
    .replace(/(^|[\s(\[{])"(\S)/g, '$1“$2')
    .replace(/(\S)"([\s)\]}.,;!?]|$)/g, '$1”$2')
    .replace(/"/g, '”');

  // Single quotes and apostrophes
  return toCurlyApostrophes(result);
}

/**
 * HTML-safe curly conversion that only transforms quotes and apostrophes
 * outside of HTML tags, preserving attribute values like class="..." or href="...".
 */
export function toCurlyHtml(html: string | null | undefined): string {
  if (!html) return '';

  const parts = html.split(/(<[^>]+>)/g);
  for (let i = 0; i < parts.length; i += 2) {
    if (parts[i]) {
      parts[i] = toCurlyQuotes(parts[i]);
    }
  }
  return parts.join('');
}

/**
 * Safely converts string values of an object (e.g. ContentItem) so rendered properties
 * automatically feature pristine curly apostrophes and quotes.
 */
export function smartCurlyContent<T extends { title?: string; summary?: string; englishText?: string; citation?: string }>(item: T): T {
  if (!item) return item;
  return {
    ...item,
    title: item.title ? toCurlyQuotes(item.title) : item.title,
    summary: item.summary ? toCurlyQuotes(item.summary) : item.summary,
    englishText: item.englishText ? toCurlyQuotes(item.englishText) : item.englishText,
    citation: item.citation ? toCurlyQuotes(item.citation) : item.citation,
  };
}
