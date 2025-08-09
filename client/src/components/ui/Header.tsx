import React, { JSX } from 'react';
import clsx from 'clsx';

type HeaderProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  className?: string;
  withHighlighter?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  level,
  text,
  className,
  withHighlighter,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const finalClassName = clsx(`h${level}`, className);

  return (
    <Tag className={finalClassName}>
      {withHighlighter ? (
        <span className="multi-line-highlighter">{text}</span>
      ) : (
        text
      )}
    </Tag>
  );
};

export default Header;