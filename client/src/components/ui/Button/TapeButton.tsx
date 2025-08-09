import React from 'react';
import Link, { type LinkProps } from 'next/link';
import clsx from 'clsx';

import TornTapeSmall1 from './torn-tape-1.svg';
import TornTapeSmall2 from './torn-tape-2.svg';
import TornTapeSmall3 from './torn-tape-3.svg';
import TornTapeLarge1 from './torn-tape-long-1.svg';
import TornTapeLarge2 from './torn-tape-long-2.svg';
import TornTapeLarge3 from './torn-tape-long-3.svg';

const svgVariants = {
  small: [TornTapeSmall1, TornTapeSmall2, TornTapeSmall3],
  large: [TornTapeLarge1, TornTapeLarge2, TornTapeLarge3],
};

type TapeLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    variant?: 'small' | 'large';
    svgVariantIndex?: 0 | 1 | 2;
  };

const TapeLink = ({
  children,
  className,
  disabled,
  variant = 'small',
  svgVariantIndex = 0,
  ...props
}: TapeLinkProps) => {
  const SvgComponent = svgVariants[variant][svgVariantIndex];

  const finalClasses = clsx(
    baseClasses,
    variantClasses[variant],
    disabled && disabledClasses,
    className
  );

  const SvgBackground = () => (
    <SvgComponent
      className="absolute inset-0 -z-10 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    />
  );

  if (disabled) {
    return (
      <span className={finalClasses}>
        <SvgBackground />
        <span className="z-10">{children}</span>
      </span>
    );
  }

  return (
    <Link className={finalClasses} {...props}>
      <SvgBackground />
      <span className="z-10">{children}</span>
    </Link>
  );
};

const baseClasses = `
    relative inline-flex items-center justify-center
    border-none bg-transparent
    font-heading text-lg md:text-2xl lg:text-3xl text-neutral-800
    transition-transform duration-150 ease-out 
    hover:scale-105 active:scale-95
  `;

const variantClasses = {
  small: 'px-[1em] py-[0.3em]',
  large: 'px-[1.5em] py-[0.45em]',
};

const disabledClasses = 'cursor-not-allowed opacity-60 pointer-events-none';

export default TapeLink;
