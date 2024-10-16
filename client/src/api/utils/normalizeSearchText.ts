import removeAccents from 'remove-accents';

/**
 * Funkcja normalizująca tekst dla celów wyszukiwania.
 * - Konwertuje tekst na małe litery
 * - Usuwa akcenty i znaki diakrytyczne
 * - Usuwa zbędne białe znaki
 * @param {String} text - Tekst do normalizacji
 * @returns {String} - Znormalizowany tekst
 */

export default function normalizeSearchText(text?: string) {
  if (!text) return '';

  text = removeAccents(text);

  return text
    .toLowerCase()
    .replace(/\s+/g, ' ') // Zamienia wiele białych znaków na pojedynczą spację
    .trim(); // Usuwa spacje na początku i końcu tekstu
}
