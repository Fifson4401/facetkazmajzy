import { ImageProps, MenuArray, PageAttributes } from "./defaults";

export type HomePageAttributes = PageAttributes & {
  header: HeaderAttributes;
  search: SearchAttributes;
  menu: MenuArray;
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
