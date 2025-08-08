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

  const finalClassName = clsx(levelStyles[level], className);

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

const levelStyles: Record<HeaderProps['level'], string> = {
  1: 'font-heading text-4xl md:text-5xl lg:text-6xl text-foreground',
  2: 'font-heading text-3xl md:text-4xl lg:text-5xl text-foreground',
  3: 'font-heading text-2xl md:text-3xl lg:text-4xl text-foreground/90',
  4: 'font-body text-xl md:text-2xl lg:text-3xl text-accent font-semibold',
  5: 'font-heading text-lg md:text-xl lg:text-2xl text-foreground/80',
  6: 'font-heading text-base md:text-lg lg:text-xl text-foreground/70 uppercase tracking-wider',
};

export default Header;
