// utils.js

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

  return text
    .toLowerCase()
    .normalize('NFD') // Rozdziela znaki z akcentami od podstawowych znaków
    .replace(/[\u0300-\u036f]/g, '') // Usuwa znaki diakrytyczne
    .replace(/\s+/g, ' ') // Zamienia wiele białych znaków na pojedynczą spację
    .trim(); // Usuwa spacje na początku i końcu tekstu
}
