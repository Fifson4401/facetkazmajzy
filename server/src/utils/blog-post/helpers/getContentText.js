const removeAccents = require("remove-accents");

/**
 * Funkcja ekstraktująca czysty tekst z obiektów typu 'tex'.
 * Usuwa wszystkie równania oraz znaczniki LaTeX, pozostawiając tylko tekst.
 * @param {Array} content - Tablica obiektów zawierających treść bloga.
 * @returns {String} - Czysty tekst z obiektów typu 'tex'.
 */
function getContentText(content) {
  const textArray = content
    // Filtrujemy obiekty typu 'blog-post.tex'
    .filter((item) => item.__component === "blog-post.tex" && item.TEX)
    .map((item) => {
      let text = item.TEX;

      // Usuń blokowe środowiska LaTeX, np. \begin{equation*}...\end{equation*}
      text = text.replace(/\\begin\{[^}]+\}[\s\S]*?\\end\{[^}]+\}/g, "");

      // Usuń inline math $...$, \( ... \), \[ ... \]
      text = text.replace(/\$[^$]*\$/g, "");
      text = text.replace(/\\\([^)]*\)/g, "");
      text = text.replace(/\\\[[^\]]*\]/g, "");

      // Usuń komendy LaTeX, zachowując zawartość w nawiasach klamrowych
      text = text.replace(/\\[a-zA-Z]+\{([^}]*)\}/g, "$1");

      // Usuń pojedyncze komendy LaTeX bez nawiasów klamrowych
      text = text.replace(/\\[a-zA-Z]+/g, "");

      // Zamień podwójne backslashes i znaki nowej linii na spację
      text = text.replace(/\\\\/g, " ").replace(/\\n/g, " ");

      // Usuń dodatkowe białe znaki i zamień je na pojedynczą spację
      text = text.replace(/\s+/g, " ").trim();


      // Normalizacja tekstu dla wyszukiwania
      text = text.toLowerCase();
      text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, "");
      text = removeAccents(text);

      return text;
    });

  // Połącz wszystkie teksty w jedną linię, oddzielone spacją
  const uniqueTextArray = [...new Set(textArray)];

  return uniqueTextArray.join(" ").replace(/\s+/g, " ").trim();
}

module.exports = {
  getContentText,
};