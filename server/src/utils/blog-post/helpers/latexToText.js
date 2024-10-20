function latexToText(latexInput) {
  if (!latexInput) {
    return '';
  }

  let textOutput = latexInput;

  // **Step 0: Normalize backslashes**
  textOutput = textOutput.replace(/\\\\/g, '\\');

  // ** Nowy Krok 0: Escape all % to \% **
  textOutput = textOutput.replace(/%/g, '\\%');

  // 1. Replace \% with a unique placeholder to protect them from being removed as comments
  textOutput = textOutput.replace(/\\%/g, '###PERCENT###');

  // 2. Remove unnecessary LaTeX tags
  textOutput = textOutput.replace(/\\begin\{array\}\{[^}]+\}|\s*\\end\{array\}/g, '');
  textOutput = textOutput.replace(/\{rcl\}/g, '');
  textOutput = textOutput.replace(/\\begin\{.*?\}|\s*\\end\{.*?\}/g, '');

  // 5. Replace LaTeX newlines '\\' with a space
  textOutput = textOutput.replace(/\\\\/g, ' ');

  // 6. Replace \textbf{...} with just the text inside
  textOutput = textOutput.replace(/\\textbf\{(.*?)\}/gs, '$1');

  // 7. Replace mathematical symbols
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

  // Replace symbols
  for (const [key, value] of Object.entries(symbols)) {
    const regex = new RegExp(key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    textOutput = textOutput.replace(regex, value);
  }

  // 8. Special replacements for ^{\circ} and ^{°} to °
  textOutput = textOutput.replace(/\^\{\\circ\}/g, '°');
  textOutput = textOutput.replace(/\^\{°\}/g, '°');

  // 9. Replace superscripts and subscripts
  textOutput = textOutput.replace(/\^\{([^{}]+)\}/g, '^($1)');
  textOutput = textOutput.replace(/_\{([^{}]+)\}/g, '_($1)');

  // Replace ^x with ^(x) if x is a single character
  textOutput = textOutput.replace(/\^([^\s^{(])/g, '^($1)');
  textOutput = textOutput.replace(/_([^\s^{(])/g, '_($1)');

  // 10. Replace fractions \frac{a}{b} with a/b
  textOutput = textOutput.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2');

  // 11. Replace square roots \sqrt{a} with √(a)
  textOutput = textOutput.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');

  // 12. Remove unnecessary $ symbols
  textOutput = textOutput.replace(/\$/g, '');

  // 13. Replace commas with dots in decimal numbers
  textOutput = textOutput.replace(/(\d),(\d)/g, '$1.$2');

  // 14. Replace special LaTeX characters with normal ones
  textOutput = textOutput.replace(/\\left\(/g, '(');
  textOutput = textOutput.replace(/\\right\)/g, ')');
  textOutput = textOutput.replace(/\\left\[/g, '[');
  textOutput = textOutput.replace(/\\right\]/g, ']');
  textOutput = textOutput.replace(/\\left\{/g, '{');
  textOutput = textOutput.replace(/\\right\}/g, '}');

  // Remove \right.
  textOutput = textOutput.replace(/\\right\./g, '');

  // 15. Remove LaTeX comments (%)
  textOutput = textOutput.replace(/(?<!\\)%.*$/gm, '');

  // 16. Restore percentage symbols
  textOutput = textOutput.replace(/###PERCENT###/g, '%');

  // 17. Remove remaining LaTeX commands
  textOutput = textOutput.replace(/\\[a-zA-Z]+/g, '');

  // 18. Remove unwanted dot after \right.
  textOutput = textOutput.replace(/}\s*\./g, '}');

  // 19. Remove spaces after arithmetic operators
  textOutput = textOutput.replace(/([+\-*/=])\s+/g, '$1');

  // 20. Replace multiple spaces and newlines with a single space
  textOutput = textOutput.replace(/[\n\s]+/g, ' ').trim();

  // ** New Step 21: Remove occurrences of {0.1cm}, {2cm}, etc. **
  textOutput = textOutput.replace(/\{\s*[\d.]+\s*cm\s*\}/g, '');

  return textOutput;
}

module.exports = {
  latexToText,
};
