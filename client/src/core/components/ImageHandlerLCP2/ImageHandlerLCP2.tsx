import { FC } from 'react';

import { ImageInstance } from '@/core/models/ImageInstance';

import { ImageHandlerLCP2Props } from './ImageHandlerLCP2.types';
import { PropsWithClassName } from '@/api/interfaces/defaults';

export const ImageHandlerLCP2: FC<
  PropsWithClassName<ImageHandlerLCP2Props>
> = ({ image, wrapperClassName = '', imageClassName = '' }) => {
  if (!image) {
    return null;
  }

  const source = new ImageInstance(image);

  return (
    <div className={`h-full w-full ${wrapperClassName}`}>
      <img
        style={{ width: '100%', height: 'inherit', borderRadius: 12 }}
        width={source.width}
        height={source.height}
        src={source.url}
        sizes={source.sizes}
        alt={source.alternativeText}
        title={source.title}
        className={`block object-contain object-center ${imageClassName}`}
        fetchPriority="high"
      />
    </div>
  );
};
