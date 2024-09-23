import React, { FC } from 'react';
import 'katex/dist/katex.min.css';
import { ImageHandler } from '../ImageHandler/ImageHandler';
import { ImageProps } from '@/api/interfaces/defaults';

export interface PostContentImageProps {
  image?: ImageProps;
}

const PostContentImage: FC<PostContentImageProps> = ({ image }) => {
  if (!image) {
    return null;
  }

  return (
    <div>
      <ImageHandler
        image={image.data?.attributes}
        priority
        removeWrapper
        imageClassName="object-cover max-lg:max-h-[50vh] max-md:max-h-[40vh]"
      />
    </div>
  );
};

export default PostContentImage;
