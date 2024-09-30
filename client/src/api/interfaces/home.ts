import { HeroAttributes, ImageProps, PageAttributes } from './defaults';

export type HomePageAttributes = PageAttributes & {
  hero: HeroAttributes;
  search: HomeSearchAttributes;
};

export type HomeSearchAttributes = {
  placeholder: string;
  image: ImageProps;
};
