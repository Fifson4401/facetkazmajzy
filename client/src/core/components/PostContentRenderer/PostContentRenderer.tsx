import React, { FC } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export interface PostContentRendererProps {
  content?: string;
  key: string;
  className?: string;
}

const parseContent = (content: string): React.ReactNode[] => {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  // Kombinowane wyrażenie regularne z alternatywami dla różnych typów dopasowań
  const regex = /\\textbf\{([^}]+)\}|\\begin\{equation\*\}([\s\S]*?)\\end\{equation\*\}|\$([^$]+)\$|\\\\|\n/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    const matchStart = match.index;
    const matchEnd = regex.lastIndex;

    // Dodanie tekstu przed dopasowaniem jako zwykły tekst
    if (lastIndex < matchStart) {
      const text = content.substring(lastIndex, matchStart);
      elements.push(<span key={lastIndex}>{text}</span>);
    }

    if (match[1]) {
      // \textbf{...}
      const boldContent = match[1];
      // Rekurencyjnie parsujemy zawartość pogrubienia
      elements.push(
        <strong key={matchStart}>
          {parseContent(boldContent)}
        </strong>
      );
    } else if (match[2]) {
      // \begin{equation*}...\end{equation*}
      const blockMathContent = match[2];
      elements.push(<BlockMath key={matchStart} math={blockMathContent} />);
    } else if (match[3]) {
      // $...$ (inline math)
      const inlineMathContent = match[3];
      elements.push(<InlineMath key={matchStart} math={inlineMathContent} />);
    } else if (match[0] === '\\\\') {
      // \\\\ (line break)
      elements.push(<br key={matchStart} />);
    } else if (match[0] === '\n') {
      // \n (newline)
      elements.push(<br key={matchStart} />);
    }

    lastIndex = matchEnd;
  }

  if (lastIndex < content.length) {
    const text = content.substring(lastIndex);
    elements.push(<span key={lastIndex}>{text}</span>);
  }

  return elements;
};

const PostContentRenderer: FC<PostContentRendererProps> = ({ content, key, className = 'md:px-11' }) => {
  if (!content) {
    return null;
  }

  const parsedElements = parseContent(content);
  return <div key={key} className={`w-full ${className}`}>{parsedElements}</div>;
};

export default PostContentRenderer;
