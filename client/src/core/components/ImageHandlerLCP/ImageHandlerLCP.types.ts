import { ImageAttributes } from '@/api/interfaces/defaults';

export type ImageHandlerLCPProps = {
  image: ImageAttributes | undefined;
  priority?: boolean;
  wrapperClassName?: string;
  imageClassName?: string;
};
