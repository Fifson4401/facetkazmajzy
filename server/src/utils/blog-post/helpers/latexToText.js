function latexToText(latexInput) {
  if (!latexInput) {
    return '';
  }

  let textOutput = latexInput;

  // ** Nowy Krok 0: Escape'owanie wszystkich % na \% **
  textOutput = textOutput.replace(/%/g, '\\%');

  // 1. Zamień \% na unikalny znacznik, aby ochronić je przed usunięciem jako komentarze
  textOutput = textOutput.replace(/\\%/g, '###PERCENT###');

  // 2. Usuwanie niepotrzebnych tagów LaTeX
  textOutput = textOutput.replace(/\\begin\{array\}\{[^}]+\}|\s*\\end\{array\}/g, '');
  textOutput = textOutput.replace(/\{rcl\}/g, '');
  textOutput = textOutput.replace(/\\begin\{.*?\}|\s*\\end\{.*?\}/g, '');

  // 5. Zamień podwójne backslashes na spację
  textOutput = textOutput.replace(/\\\\/g, ' ');

  // 6. Zamień \textbf{...} na sam tekst
  textOutput = textOutput.replace(/\\textbf\{(.*?)\}/g, '$1');

  // 7. Zamiana symboli matematycznych
  const symbols = {
    '\\infty': '∞',
    '\\cdot': '*',
    '\\ast': '*',
    '\\times': '×',
    '\\leq': '≤',
    '\\geq': '≥',
    '\\pm': '±',
    '\\mp': '∓',
    '\\sqrt': '√',
    '\\approx': '≈',
    '\\neq': '≠',
    '\\equiv': '≡',
    '\\propto': '∝',
    '\\alpha': 'α',
    '\\beta': 'β',
    '\\gamma': 'γ',
    '\\delta': 'δ',
    '\\epsilon': 'ε',
    '\\zeta': 'ζ',
    '\\eta': 'η',
    '\\theta': 'θ',
    '\\lambda': 'λ',
    '\\mu': 'μ',
    '\\pi': 'π',
    '\\phi': 'φ',
    '\\omega': 'ω',
    '\\rightarrow': '→',
    '\\leftarrow': '←',
    '\\Rightarrow': '⇒',
    '\\Leftarrow': '⇐',
    '\\leftrightarrow': '↔',
    '\\sum': '∑',
    '\\prod': '∏',
    '\\int': '∫',
    '\\partial': '∂',
    '\\nabla': '∇',
    '\\in': '∈',
    '\\notin': '∉',
    '\\subset': '⊂',
    '\\subseteq': '⊆',
    '\\supset': '⊃',
    '\\supseteq': '⊇',
    '\\cup': '∪',
    '\\cap': '∩',
    '\\forall': '∀',
    '\\exists': '∃',
    '\\neg': '¬',
    '\\wedge': '∧',
    '\\vee': '∨',
    '\\oplus': '⊕',
    '\\otimes': '⊗',
    '\\perp': '⊥',
    '\\angle': '∠',
    '\\degree': '°',
    '\\circ': '°',
    '\\#': '#',
    '\\&': '&',
    '\\_': '_',
    '\\{': '{',
    '\\}': '}',
    '\\$': '$',
    '\\,': ' ',
    '\\;': ' ',
    '\\!': '',
    '\\quad': '    ',
    '\\qquad': '        ',
    '~': ' ',
  };

  // Zamiana symboli
  for (const [key, value] of Object.entries(symbols)) {
    const regex = new RegExp(key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    textOutput = textOutput.replace(regex, value);
  }

  // 8. Specjalna zamiana ^{\circ} i ^{°} na °
  textOutput = textOutput.replace(/\^\{\\circ\}/g, '°');
  textOutput = textOutput.replace(/\^\{°\}/g, '°');

  // 9. Zamiana potęg i indeksów dolnych
  textOutput = textOutput.replace(/\^\{([^{}]+)\}/g, '^($1)');
  textOutput = textOutput.replace(/_\{([^{}]+)\}/g, '_($1)');

  // Zamiana ^x na ^(x) jeśli x jest pojedynczym znakiem (bez nawiasów i już nie jest w nawiasach)
  textOutput = textOutput.replace(/\^([^\s^{(])/g, '^($1)');
  textOutput = textOutput.replace(/_([^\s^{(])/g, '_($1)');

  // 10. Zamiana ułamków \frac{a}{b} na a/b
  textOutput = textOutput.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2');

  // 11. Zamiana pierwiastków \sqrt{a} na √(a)
  textOutput = textOutput.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');

  // 12. Usuwanie zbędnych znaków $
  textOutput = textOutput.replace(/\$/g, '');

  // 13. Zamiana przecinków na kropki w liczbach dziesiętnych
  textOutput = textOutput.replace(/(\d),(\d)/g, '$1.$2');

  // 14. Zamiana znaków specjalnych LaTeX na zwykłe
  textOutput = textOutput.replace(/\\left\(/g, '(');
  textOutput = textOutput.replace(/\\right\)/g, ')');
  textOutput = textOutput.replace(/\\left\[/g, '[');
  textOutput = textOutput.replace(/\\right\]/g, ']');
  textOutput = textOutput.replace(/\\left\{/g, '{');
  textOutput = textOutput.replace(/\\right\}/g, '}');

  // Usunięcie \right.
  textOutput = textOutput.replace(/\\right\./g, '');

  // 15. Usuwanie komentarzy LaTeX (%)
  textOutput = textOutput.replace(/(?<!\\)%.*$/gm, '');

  // 16. Przywrócenie symboli procenta
  textOutput = textOutput.replace(/###PERCENT###/g, '%');

  // 17. Usuwanie reszty znaczników LaTeX
  textOutput = textOutput.replace(/\\[a-zA-Z]+/g, '');

  // 18. Usuwanie niechcianej kropki po \right.
  textOutput = textOutput.replace(/}\s*\./g, '}');

  // 19. Usuwanie spacji po znakach arytmetycznych
  textOutput = textOutput.replace(/([+\-*/=])\s+/g, '$1');

  // 20. Zamiana wielokrotnych spacji i znaków nowej linii na pojedynczą spację
  textOutput = textOutput.replace(/[\n\s]+/g, ' ').trim();

  // ** Nowy Krok 21: Usunięcie wystąpień {0.1cm}, {2cm} itp. **
  textOutput = textOutput.replace(/\{\s*[\d.]+\s*cm\s*\}/g, '');

  return textOutput;
}

module.exports = {
  latexToText,
};
