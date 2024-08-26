import { ImageProps } from "next/image";

export type HomePageAttributes = {
  header: HeaderAttributes;
  search: SearchAttributes;
};

export type HeaderAttributes = {
  title: string;
  description: string;
  image: ImageProps;
  button: { text: string; url: string };
};

export type SearchAttributes = {
  placeholder: string;
  image: ImageProps;
};
