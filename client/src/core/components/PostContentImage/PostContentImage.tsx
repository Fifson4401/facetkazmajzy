import React, { FC } from 'react';
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
    <ImageHandler
      image={image.data?.attributes}
      wrapperClassName={`items-center align-middle justify-center flex my-10`}
      imageClassName="object-cover max-lg:max-h-[50vh] max-md:max-h-[40vh] min-h10"
    />
  );
};

export default PostContentImage;
