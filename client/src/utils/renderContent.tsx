import React, { ReactNode } from 'react';
import Image from 'next/image';
import Highlight from '@/components/ui/Highlight';

type TextPart = {
  type: 'text' | 'highlight';
  content: string;
  color?: string;
};

type ListItem = {
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


export const renderContent = (content: AnyContent[] | undefined): ReactNode[] => {
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
          <ul key={key} className="list-none p-0 space-y-4">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <Image
                  src={item.iconSrc}
                  alt="ikona punktu listy"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                />
                <span className="flex-grow">
                  {renderTextParts(item.content)}
                </span>
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  });
};