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
      if (value.xl) style[`--${cssVarName}-xl`] = String(value.xl);
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
  applyResponsiveProp('aspectRatio', 'doodle-aspect-ratio');

  // Określ domyślne wymiary dla Next.js Image
  const getImageSize = () => {
    let width = 50; // zwiększona domyślna szerokość
    let height = 50; // zwiększona domyślna wysokość

    // Sprawdź czy są podane wymiary w base
    if (doodle.width) {
      const widthValue = typeof doodle.width === 'object' ? doodle.width.base : doodle.width;
      // Konwertuj rem/em na piksele (zakładając 1rem = 16px)
      if (typeof widthValue === 'string') {
        if (widthValue.includes('rem')) {
          width = parseFloat(widthValue) * 16;
        } else if (widthValue.includes('px')) {
          width = parseFloat(widthValue);
        }
      } else if (typeof widthValue === 'number') {
        width = widthValue;
      }
    }

    if (doodle.height) {
      const heightValue = typeof doodle.height === 'object' ? doodle.height.base : doodle.height;
      if (typeof heightValue === 'string') {
        if (heightValue.includes('rem')) {
          height = parseFloat(heightValue) * 16;
        } else if (heightValue.includes('px')) {
          height = parseFloat(heightValue);
        }
      } else if (typeof heightValue === 'number') {
        height = heightValue;
      }
    }

    // Jeśli tylko jeden wymiar jest podany i mamy aspect ratio, oblicz drugi
    if (doodle.aspectRatio) {
      if (doodle.width && !doodle.height) {
        height = width / doodle.aspectRatio;
      } else if (doodle.height && !doodle.width) {
        width = height * doodle.aspectRatio;
      }
    }

    return { width: Math.round(width), height: Math.round(height) };
  };

  const { width: imgWidth, height: imgHeight } = getImageSize();

  return (
    <div className="doodle pointer-events-none" style={style}>
      <Image
        src={doodle.src}
        alt="doodle-decoration"
        width={imgWidth}
        height={imgHeight}
        priority
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};