import React from 'react';

import TornTapeSvg from './torn-tape.svg';

type TapeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const TapeButton = ({
  children,
  className,
  ...props
}: TapeButtonProps) => {
  return (
    <button
      className={`
        relative inline-flex items-center justify-center 
        border-none bg-transparent 
        px-10 py-3 
        font-heading text-lg text-neutral-800
        transition-transform duration-150 ease-out 
        hover:scale-105 active:scale-95
        disabled:cursor-not-allowed disabled:opacity-60
        ${className} 
      `}
      {...props} 
    >
      
      <TornTapeSvg
        className="absolute -z-10 left-6 bottom-0.5"
        transform="scale(1.1)"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};