import { FC } from 'react';
import Image from 'next/image';
import type { Doodle } from './doodle.types';

export const DoodleImage: FC<{ doodle: Doodle }> = ({ doodle }) => {
  const style: React.CSSProperties = {};

  const applyResponsiveProp = (
    propName: keyof Omit<Doodle, 'src'>,
    cssVarName: string
  ) => {
    const value = doodle[propName];
    if (typeof value === 'undefined') return;

    if (typeof value === 'object' && value !== null && 'base' in value) {
      style[`--${cssVarName}-base`] = String(value.base);
      if (value.sm) style[`--${cssVarName}-sm`] = String(value.sm);
      if (value.md) style[`--${cssVarName}-md`] = String(value.md);
      if (value.lg) style[`--${cssVarName}-lg`] = String(value.lg);
      if (value['2xl']) style[`--${cssVarName}-2xl`] = String(value['2xl']);
    } else {
      style[`--${cssVarName}-base`] = String(value);
    }
  };

  applyResponsiveProp('width', 'doodle-width');
  applyResponsiveProp('height', 'doodle-height');
  applyResponsiveProp('top', 'doodle-top');
  applyResponsiveProp('right', 'doodle-right');
  applyResponsiveProp('bottom', 'doodle-bottom');
  applyResponsiveProp('left', 'doodle-left');
  applyResponsiveProp('rotate', 'doodle-rotate');
  applyResponsiveProp('scale', 'doodle-scale');

  return (
    <div className="doodle pointer-events-none" style={style}>
      <Image src={doodle.src} alt="doodle-decoration" layout="fill" objectFit="contain" priority />
    </div>
  );
};