import { ImageProps, MenuArray, PageAttributes } from "./defaults";

export type HomePageAttributes = PageAttributes & {
  header: HeaderAttributes;
  search: HomeSearchAttributes;
  menu: MenuArray;
};

export type HeaderAttributes = {
  title: string;
  description: string;
  image: ImageProps;
  button: { text: string; url: string };
};

export type HomeSearchAttributes = {
  placeholder: string;
  image: ImageProps;
};
