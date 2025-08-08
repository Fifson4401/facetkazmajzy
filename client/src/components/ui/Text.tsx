import React from 'react';
import { clsx } from 'clsx';

type TextSize = 'sm' | 'base' | 'lg' | 'xl';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
  size?: TextSize;
  className?: string;
  children: React.ReactNode;
}

const sizeStyles: Record<TextSize, string> = {
  sm: 'text-sm lg:text-base',
  base: 'text-base lg:text-lg',
  lg: 'text-lg lg:text-xl',
  xl: 'text-xl lg:text-2xl',
};

export const Text = ({
  as: Component = 'p',
  size = 'base',
  className,
  children,
  ...props
}: TextProps) => {
  const combinedClasses = clsx(
    'font-body text-foreground/90 leading-relaxed',
    sizeStyles[size],
    className
  );

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};
