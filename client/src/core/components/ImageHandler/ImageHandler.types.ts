import { ImageAttributes } from "@/api/interfaces/defaults";
import { ImageProps } from "@nextui-org/react";

export type ImageHandlerProps = {
  image: ImageAttributes | undefined;
  priority?: boolean;
  wrapperClassName?: string;
  imageClassName?: string;
} & ImageProps;
