function getDescription(content) {
  // Znajdź pierwszy obiekt typu 'blog-post.tex'
  const firstTexComponent = content.find(
    (item) => item.__component === "blog-post.tex"
  );

  if (firstTexComponent) {
    let modifiedTex = firstTexComponent.TEX;

    // Zastąp \textbf{...} zawartością wewnątrz, obsługując zagnieżdżone nawiasy
    modifiedTex = replaceTextbfWithContent(modifiedTex);

    // Zamień '\begin{equation*}...\end{equation*}' na ' $$...$$ ' z dodaniem spacji
    modifiedTex = modifiedTex.replace(
      /\\begin\{equation\*\}([\s\S]*?)\\end\{equation\*\}/g,
      " $$ $1 $$ "
    );

    // Usuń wiodące spacje po znakach nowej linii
    modifiedTex = modifiedTex.replace(/(\r\n|\n|\r)\s+/g, "$1");

    // Zamień wszystkie znaki nowej linii na spację
    modifiedTex = modifiedTex.replace(/(\r\n|\n|\r)/gm, " ");

    // Zamień podwójne ukośniki '\\' wraz z ewentualnymi następującymi spacjami na pojedynczą spację
    modifiedTex = modifiedTex.replace(/\\\\\s*/g, " ");

    // Dodaj spację po każdym wystąpieniu '$...$' jeśli nie ma spacji
    modifiedTex = modifiedTex.replace(/(\$[^$]*\$)(?!\s)/g, "$1 ");

    // Usuń dodatkowe spacje
    modifiedTex = modifiedTex.replace(/\s+/g, " ").trim();

    // Zwróć zmodyfikowany tekst
    return modifiedTex;
  } else {
    strapi.log.error("Nie znaleziono komponentu typu blog-post.tex w content");
  }
}

// Funkcja zastępująca \textbf{...} zawartością wewnątrz, obsługując zagnieżdżone nawiasy
function replaceTextbfWithContent(input) {
  let output = "";
  let i = 0;
  while (i < input.length) {
    if (input.substr(i, 7) === "\\textbf") {
      // Znaleziono \textbf
      let braceStart = i + 7;
      // Pomiń spacje lub nowe linie
      while (
        input[braceStart] === " " ||
        input[braceStart] === "\n" ||
        input[braceStart] === "\r"
      ) {
        braceStart++;
      }
      if (input[braceStart] !== "{") {
        // Brak nawiasu otwierającego, pomiń
        output += input[i];
        i++;
        continue;
      }
      // Znajdź odpowiadający nawias zamykający, obsługując zagnieżdżenia
      let braceEnd = findMatchingBrace(input, braceStart);
      if (braceEnd === -1) {
        // Nie znaleziono nawiasu zamykającego, pomiń
        output += input[i];
        i++;
        continue;
      }
      // Wyodrębnij zawartość wewnątrz nawiasów
      let contentInside = input.substring(braceStart + 1, braceEnd);
      // Dodaj spację przed zawartością
      output += " " + contentInside;
      // Przesuń indeks na koniec nawiasu zamykającego
      i = braceEnd + 1;
    } else {
      output += input[i];
      i++;
    }
  }
  return output;
}

// Funkcja znajdująca odpowiadający nawias zamykający, obsługując zagnieżdżenia
function findMatchingBrace(str, startIndex) {
  let stack = [];
  for (let i = startIndex; i < str.length; i++) {
    if (str[i] === "{") {
      stack.push("{");
    } else if (str[i] === "}") {
      stack.pop();
      if (stack.length === 0) {
        return i;
      }
    }
  }
  // Nie znaleziono nawiasu zamykającego
  return -1;
}

module.exports = {
  getDescription,
};
