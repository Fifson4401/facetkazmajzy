import { ImageAttributes } from '@/api/interfaces/defaults';

export type ImageHandlerLCP2Props = {
  image: ImageAttributes | undefined;
  priority?: boolean;
  wrapperClassName?: string;
  imageClassName?: string;
};
