import { ImageAttributes } from '@/api/interfaces/defaults';
import { ImageProps } from '@nextui-org/image';

export type ImageHandlerProps = {
  image: ImageAttributes | undefined;
  priority?: boolean;
  wrapperClassName?: string;
  imageClassName?: string;
} & ImageProps;
