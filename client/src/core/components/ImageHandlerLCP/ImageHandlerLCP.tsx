import NextImage from 'next/image';

import { FC } from 'react';

import { ImageInstance } from '@/core/models/ImageInstance';

import { ImageHandlerLCPProps } from './ImageHandlerLCP.types';
import { PropsWithClassName } from '@/api/interfaces/defaults';

export const ImageHandlerLCP: FC<PropsWithClassName<ImageHandlerLCPProps>> = ({
  image,
  wrapperClassName = '',
  imageClassName = '',
  priority = true,
}) => {
  if (!image) {
    return null;
  }

  const source = new ImageInstance(image);

  return (
    <div className={`h-full w-full ${wrapperClassName}`}>
      <NextImage
        style={{ width: '100%', height: 'inherit', borderRadius: 12 }}
        width={source.width}
        height={source.height}
        src={source.url}
        sizes={source.sizes}
        alt={source.alternativeText}
        title={source.title}
        className={`block object-contain object-center ${imageClassName}`}
        priority={priority}
        quality={75}
      />
    </div>
  );
};
