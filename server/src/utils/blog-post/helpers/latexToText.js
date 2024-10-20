function latexToText(latexInput) {
  if (!latexInput) {
    return '';
  }

  let textOutput = latexInput;

  // Normalize backslashes
  textOutput = textOutput.replace(/\\\\/g, '\\');

  // Step 1: Escape all % to \%
  textOutput = textOutput.replace(/%/g, '\\%');

  // Step 2: Replace \% with a unique placeholder
  textOutput = textOutput.replace(/\\%/g, '###PERCENT###');

  // Remove LaTeX comments (handle escaped %)
  textOutput = textOutput.replace(/(?<!\\)%.*$/gm, '');

  // Remove unnecessary LaTeX tags
  textOutput = textOutput.replace(/\\begin\{.*?\}|\s*\\end\{.*?\}/gs, '');

  // Replace LaTeX newlines '\\' with a space
  textOutput = textOutput.replace(/\\\\/g, ' ');

  // Function to replace commands with content, handling nested braces
  function replaceCommand(input, command, replaceWith = '') {
    let output = '';
    let i = 0;
    while (i < input.length) {
      if (input.substr(i, command.length + 1) === '\\' + command + '{') {
        i += command.length + 1;
        let braceDepth = 1;
        let content = '';
        while (i < input.length && braceDepth > 0) {
          if (input[i] === '{') {
            braceDepth++;
            content += input[i];
            i++;
          } else if (input[i] === '}') {
            braceDepth--;
            if (braceDepth > 0) {
              content += input[i];
            }
            i++;
          } else {
            content += input[i];
            i++;
          }
        }
        output += replaceWith + content;
      } else {
        output += input[i];
        i++;
      }
    }
    return output;
  }

  // Replace \textbf{...} with the content inside
  textOutput = replaceCommand(textOutput, 'textbf');

  // Replace fractions \frac{a}{b} with a/b
  function replaceFrac(input) {
    let output = '';
    let i = 0;
    while (i < input.length) {
      if (input.substr(i, 6) === '\\frac{') {
        i += 6;
        let numerator = '';
        let braceDepth = 1;
        while (i < input.length && braceDepth > 0) {
          if (input[i] === '{') {
            braceDepth++;
            numerator += input[i++];
          } else if (input[i] === '}') {
            braceDepth--;
            if (braceDepth > 0) numerator += input[i];
            i++;
          } else {
            numerator += input[i++];
          }
        }
        if (input.substr(i, 1) === '{') {
          i++;
          let denominator = '';
          braceDepth = 1;
          while (i < input.length && braceDepth > 0) {
            if (input[i] === '{') {
              braceDepth++;
              denominator += input[i++];
            } else if (input[i] === '}') {
              braceDepth--;
              if (braceDepth > 0) denominator += input[i];
              i++;
            } else {
              denominator += input[i++];
            }
          }
          output += numerator + '/' + denominator;
        } else {
          output += '\\frac{' + numerator + '}';
        }
      } else {
        output += input[i++];
      }
    }
    return output;
  }

  textOutput = replaceFrac(textOutput);

  // Remove $ symbols (math mode)
  textOutput = textOutput.replace(/\$/g, '');

  // Replace special symbols
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

  // Special replacements for ^{\circ} and ^{°} to °
  textOutput = textOutput.replace(/\^\{\\circ\}/g, '°');
  textOutput = textOutput.replace(/\^\{°\}/g, '°');

  // Replace superscripts and subscripts
  textOutput = textOutput.replace(/\^\{([^{}]+)\}/g, '^($1)');
  textOutput = textOutput.replace(/_\{([^{}]+)\}/g, '_($1)');

  // Replace ^x with ^(x) if x is a single character
  textOutput = textOutput.replace(/\^([^\s^{(])/g, '^($1)');
  textOutput = textOutput.replace(/_([^\s^{(])/g, '_($1)');

  // Replace square roots \sqrt{a} with √(a)
  function replaceSqrt(input) {
    let output = '';
    let i = 0;
    while (i < input.length) {
      if (input.substr(i, 6) === '\\sqrt{') {
        i += 6;
        let content = '';
        let braceDepth = 1;
        while (i < input.length && braceDepth > 0) {
          if (input[i] === '{') {
            braceDepth++;
            content += input[i++];
          } else if (input[i] === '}') {
            braceDepth--;
            if (braceDepth > 0) content += input[i];
            i++;
          } else {
            content += input[i++];
          }
        }
        output += '√(' + content + ')';
      } else {
        output += input[i++];
      }
    }
    return output;
  }

  textOutput = replaceSqrt(textOutput);

  // Replace special LaTeX constructs
  textOutput = textOutput.replace(/\\left\(/g, '(');
  textOutput = textOutput.replace(/\\right\)/g, ')');
  textOutput = textOutput.replace(/\\left\[/g, '[');
  textOutput = textOutput.replace(/\\right\]/g, ']');
  textOutput = textOutput.replace(/\\left\{/g, '{');
  textOutput = textOutput.replace(/\\right\}/g, '}');
  textOutput = textOutput.replace(/\\right\./g, '');

  // Remove remaining LaTeX commands
  textOutput = textOutput.replace(/\\[a-zA-Z]+/g, '');

  // Restore percentage symbols
  textOutput = textOutput.replace(/###PERCENT###/g, '%');

  // Remove unwanted dot after \right.
  textOutput = textOutput.replace(/}\s*\./g, '}');

  // Remove spaces after arithmetic operators
  textOutput = textOutput.replace(/([+\-*/=])\s+/g, '$1');

  // Replace multiple spaces and newlines with a single space
  textOutput = textOutput.replace(/[\n\s]+/g, ' ').trim();

  // Remove occurrences of {0.1cm}, {2cm}, etc.
  textOutput = textOutput.replace(/\{\s*[\d.]+\s*cm\s*\}/g, '');

  return textOutput;
}

module.exports = {
  latexToText,
};
