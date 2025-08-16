import React, { ReactNode } from 'react';
import Highlight from '@/components/ui/Highlight';
import BulletList from '@/components/ui/BulletList';

type TextPart = {
  type: 'text' | 'highlight';
  content: string;
  color?: string;
};

export type ListItem = {
  iconSrc: string;
  content: TextPart[];
};

type BulletListBlock = {
  type: 'bulletList';
  items: ListItem[];
};

type AnyContent = TextPart | BulletListBlock;

const renderTextParts = (parts: TextPart[]): ReactNode[] => {
  return parts.map((part, index) => {
    const key = `text_part_${index}`;
    if (part.type === 'highlight') {
      return (
        <Highlight key={key} color={part.color}>
          {part.content}
        </Highlight>
      );
    }
    return <React.Fragment key={key}>{part.content}</React.Fragment>;
  });
};

export const renderContent = (
  content: AnyContent[] | undefined
): ReactNode[] => {
  if (!Array.isArray(content)) {
    return [];
  }

  return content.map((block, index) => {
    const key = `content_block_${index}`;

    switch (block.type) {
      case 'text':
      case 'highlight':
        return renderTextParts([block]);

      case 'bulletList':
        return (
          <BulletList key={key} items={block.items}>
            {(content) => renderTextParts(content)}
          </BulletList>
        );

      default:
        return null;
    }
  });
};
