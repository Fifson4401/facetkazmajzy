import React, { ReactNode } from 'react';
import Image from 'next/image';
import { ListItem } from '@/utils/renderContent';

type BulletListProps = {
  items: ListItem[];
  children: (content: ListItem['content']) => ReactNode;
};

const BulletList: React.FC<BulletListProps> = ({ items, children }) => {
  return (
    <ul className="list-none p-0 space-y-4">
      {items.map((item, itemIndex) => (
        <li key={itemIndex} className="flex items-start">
          <Image
            src={item.iconSrc}
            alt="bullet list icon"
            width={20}
            height={20}
            className="w-5 h-6 mr-3 mt-1 flex-shrink-0"
          />
          <span className="flex-grow text-body-base">
            {children(item.content)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;