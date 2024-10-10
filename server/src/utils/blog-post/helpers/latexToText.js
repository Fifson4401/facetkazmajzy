function latexToText(latexInput) {
  if (!latexInput) { // Jeśli wejście jest puste, zwróć pusty string
    return '';
  }

  let textOutput = latexInput;

  // Usuwanie niepotrzebnych tagów LaTeX
  textOutput = textOutput.replace(/\\begin\{.*?\}|\s*\\end\{.*?\}/g, '');
  textOutput = textOutput.replace(/\\\\/g, ' '); // Zamień podwójne backslashes na spację
  textOutput = textOutput.replace(/\\textbf\{(.*?)\}/g, '$1'); // Pogrubienie

  // Zamiana symboli matematycznych
  const symbols = {
    '\\infty': '∞',
    '\\cdot': '*', // Zamieniamy '·' na '*'
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
    '\\%': '%',
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

  // Specjalna zamiana ^{\circ} i ^{°} na °
  textOutput = textOutput.replace(/\^\{\\circ\}/g, '°');
  textOutput = textOutput.replace(/\^\{°\}/g, '°');

  // Zamiana potęg i indeksów dolnych
  // Najpierw zamieniamy ^{x} na ^(x) dla wszystkich x, niezależnie od długości
  textOutput = textOutput.replace(/\^{([^{}]+)}/g, '^($1)');
  textOutput = textOutput.replace(/_\{([^{}]+)\}/g, '_($1)');

  // Dodatkowo, zamiana ^x na ^(x) jeśli x jest pojedynczym znakiem (bez nawiasów)
  textOutput = textOutput.replace(/\^([^\s^{])/g, '^($1)');
  textOutput = textOutput.replace(/_([^\s^{])/g, '_($1)');

  // Zamiana ułamków \frac{a}{b} na a/b
  textOutput = textOutput.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2');

  // Zamiana pierwiastków \sqrt{a} na √(a)
  textOutput = textOutput.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');

  // Usuwanie zbędnych znaków $
  textOutput = textOutput.replace(/\$/g, '');

  // Zamiana przecinków na kropki w liczbach dziesiętnych
  textOutput = textOutput.replace(/(\d),(\d)/g, '$1.$2');

  // Usuwanie nadmiarowych spacji
  textOutput = textOutput.replace(/\s+/g, ' ').trim();

  // Zamiana znaków specjalnych LaTeX na zwykłe
  textOutput = textOutput.replace(/\\left\(/g, '(');
  textOutput = textOutput.replace(/\\right\)/g, ')');
  textOutput = textOutput.replace(/\\left\[/g, '[');
  textOutput = textOutput.replace(/\\right\]/g, ']');
  textOutput = textOutput.replace(/\\left\\{/g, '{');
  textOutput = textOutput.replace(/\\right\\}/g, '}');

  // Usuwanie komentarzy LaTeX (%)
  textOutput = textOutput.replace(/%.*$/gm, '');

  // Usuwanie reszty znaczników LaTeX, które nie zostały wcześniej obsłużone
  textOutput = textOutput.replace(/\\[a-zA-Z]+/g, '');

  // Zamiana wielokrotnych spacji i znaków nowej linii na pojedynczą spację
  textOutput = textOutput.replace(/[\n\s]+/g, ' ').trim();

  return textOutput;
}

module.exports = {
  latexToText,
};
