import React, { FC } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export interface PostContentRendererProps {
  content?: string;
  className?: string;
}

const parseContent = (
  content: string,
  index: number = 0
): { nodes: React.ReactNode[]; newIndex: number } => {
  const nodes: React.ReactNode[] = [];
  const length = content.length;

  while (index < length) {
    if (content.startsWith('\\textbf{', index)) {
      const result = parseTextbf(content, index);
      nodes.push(result.node);
      index = result.newIndex;
    } else if (content.startsWith('\\begin{equation*}', index)) {
      const result = parseBlockMath(content, index);
      nodes.push(result.node);
      index = result.newIndex;
    } else if (content[index] === '$') {
      const result = parseInlineMath(content, index);
      nodes.push(result.node);
      index = result.newIndex;
    } else if (content.startsWith('\\\\', index) || content[index] === '\n') {
      nodes.push(<br key={index} />);
      index += content[index] === '\n' ? 1 : 2;
    } else {
      const nextIndex = findNextSpecialIndex(content, index);
      const text = content.substring(index, nextIndex);
      nodes.push(<span key={index}>{text}</span>);
      index = nextIndex;
    }
  }

  return { nodes, newIndex: index };
};

const findNextSpecialIndex = (content: string, index: number): number => {
  const specialStrings = ['\\textbf{', '\\begin{equation*}', '$', '\\\\', '\n'];
  let nextIndex = content.length;

  for (const special of specialStrings) {
    const i = content.indexOf(special, index);
    if (i !== -1 && i < nextIndex) {
      nextIndex = i;
    }
  }

  return nextIndex;
};

const parseTextbf = (
  content: string,
  index: number
): { node: React.ReactNode; newIndex: number } => {
  const cmd = '\\textbf{';
  index += cmd.length;
  const startIndex = index;
  let depth = 1;

  while (index < content.length && depth > 0) {
    if (content[index] === '\\') {
      index += 2; // Skip escaped character
    } else if (content[index] === '{') {
      depth += 1;
      index += 1;
    } else if (content[index] === '}') {
      depth -= 1;
      index += 1;
    } else {
      index += 1;
    }
  }

  if (depth !== 0) {
    throw new Error('Unmatched brace in \\textbf{...}');
  }

  const innerContent = content.substring(startIndex, index - 1);
  const { nodes } = parseContent(innerContent);
  const node = (
    <strong key={startIndex}>
      {nodes}
    </strong>
  );

  return { node, newIndex: index };
};

const parseInlineMath = (
  content: string,
  index: number
): { node: React.ReactNode; newIndex: number } => {
  index += 1; // Skip the opening '$'
  const startIndex = index;

  while (index < content.length) {
    if (content[index] === '\\') {
      index += 2; // Skip escaped character
    } else if (content[index] === '$') {
      const mathContent = content.substring(startIndex, index);
      const node = (
        <InlineMath key={startIndex} math={mathContent} />
      );
      return { node, newIndex: index + 1 };
    } else {
      index += 1;
    }
  }

  throw new Error('Unmatched $ in inline math');
};

const parseBlockMath = (
  content: string,
  index: number
): { node: React.ReactNode; newIndex: number } => {
  const beginCmd = '\\begin{equation*}';
  const endCmd = '\\end{equation*}';
  index += beginCmd.length;
  const startIndex = index;

  const endIndex = content.indexOf(endCmd, index);
  if (endIndex === -1) {
    throw new Error('Unmatched \\begin{equation*}...\\end{equation*}');
  }

  const mathContent = content.substring(startIndex, endIndex);
  const node = (
    <BlockMath key={startIndex} math={mathContent} />
  );
  return { node, newIndex: endIndex + endCmd.length };
};

const PostContentRenderer: FC<PostContentRendererProps> = ({
  content,
  className = 'md:px-11',
}) => {
  if (!content) {
    return null;
  }

  const { nodes } = parseContent(content);
  return <div className={`w-full ${className}`}>{nodes}</div>;
};

export default PostContentRenderer;
