import React, { FC } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export interface PostContentRendererProps {
  content?: string;
  className?: string;
}

// Helper function to find the matching closing brace for a given opening brace
const findMatchingBrace = (content: string, startIndex: number): number => {
  let braceCount = 0;
  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '{') {
      braceCount++;
    } else if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        return i;
      }
    }
  }
  return -1; // No matching closing brace found
};

export const parseContent = (content: string): React.ReactNode[] => {
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < content.length) {
    if (content.startsWith('\\textbf{', i)) {
      // Handle \textbf{...} with nested braces
      const startIndex = i + 8; // Move past '\textbf{'
      const endIndex = findMatchingBrace(content, startIndex);
      if (endIndex !== -1) {
        const boldContent = content.substring(startIndex, endIndex);
        elements.push(<strong key={i}>{parseContent(boldContent)}</strong>);
        i = endIndex + 1;
      } else {
        // No matching closing brace found, treat as regular text
        elements.push(<span key={i}>{content.substring(i)}</span>);
        break;
      }
    } else if (content.startsWith('\\begin{equation*}', i)) {
      // Handle \begin{equation*}...\end{equation*}
      const startIndex = i + 17; // Move past '\begin{equation*}'
      const endMarker = '\\end{equation*}';
      const endIndex = content.indexOf(endMarker, startIndex);
      if (endIndex !== -1) {
        const blockMathContent = content.substring(startIndex, endIndex);
        elements.push(<BlockMath key={i} math={blockMathContent} />);
        i = endIndex + endMarker.length;
      } else {
        // No matching \end{equation*} found, treat as regular text
        elements.push(<span key={i}>{content.substring(i)}</span>);
        break;
      }
    } else if (content[i] === '$') {
      // Handle inline math $...$
      const startIndex = i + 1;
      const endIndex = content.indexOf('$', startIndex);
      if (endIndex !== -1) {
        const inlineMathContent = content.substring(startIndex, endIndex);
        elements.push(<InlineMath key={i}>{inlineMathContent}</InlineMath>);
        i = endIndex + 1;
      } else {
        // No closing '$' found, treat as regular text
        elements.push(<span key={i}>{content.substring(i)}</span>);
        break;
      }
    } else if (content.startsWith('\\\\', i)) {
      // Handle line break '\\\\'
      elements.push(<br key={i} />);
      i += 2;
    } else if (content[i] === '\n') {
      // Handle newline '\n'
      elements.push(<br key={i} />);
      i += 1;
    } else {
      // Regular text character
      let nextSpecialIndex = content.length;
      const specialSequences = [
        '\\textbf{',
        '\\begin{equation*}',
        '$',
        '\\\\',
        '\n',
      ];
      for (const seq of specialSequences) {
        const idx = content.indexOf(seq, i);
        if (idx !== -1 && idx < nextSpecialIndex) {
          nextSpecialIndex = idx;
        }
      }
      if (nextSpecialIndex > i) {
        const text = content.substring(i, nextSpecialIndex);
        elements.push(<span key={i}>{text}</span>);
        i = nextSpecialIndex;
      } else {
        // Should not reach here, but just in case
        elements.push(<span key={i}>{content[i]}</span>);
        i += 1;
      }
    }
  }

  return elements;
};

const PostContentRenderer: FC<PostContentRendererProps> = ({
  content,
  className = 'md:px-11',
}) => {
  if (!content) {
    return null;
  }

  const parsedElements = parseContent(content);
  return <div className={`w-full ${className}`}>{parsedElements}</div>;
};

export default PostContentRenderer;
