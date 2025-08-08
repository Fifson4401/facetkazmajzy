// src/components/Highlight.tsx

import React from 'react';
import { clsx } from 'clsx';

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const Highlight = ({
  children,
  className,
  color = '#FF99CC', 
}: HighlightProps) => {
  const svgShape = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 12' preserveAspectRatio='none'>
    <rect transform='rotate(-1 50 6)' x='0' y='0' width='100' height='12' rx='6' ry='6' fill='${color}' opacity='0.34'/>
  </svg>`;

  const encodedSvg = `url("data:image/svg+xml,${encodeURIComponent(svgShape)}")`;

  return (
    <span
      className={clsx(
        'px-1 -my-1',
        '[box-decoration-break:clone]',
        className
      )}
      style={{
        backgroundImage: encodedSvg,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </span>
  );
};

export default Highlight;