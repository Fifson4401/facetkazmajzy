import { ImageAttributes } from '@/api/interfaces/defaults';
import { ImageProps } from "@heroui/image";

export type ImageHandlerProps = {
  image: ImageAttributes | undefined;
  priority?: boolean;
  wrapperClassName?: string;
  imageClassName?: string;
} & ImageProps;
