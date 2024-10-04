import { RefObject } from 'react';

import { StrapiFindAllResponse } from './strapiResponse';
import { SEO } from './seo';
import { CategoriesBlog } from './collections/categories';

// used

export type PropsWithMenu<T = object> = T & { menu: MenuArray };
export interface DefaultPageProps<T> {
  pageData: T | null;
}

export type PropsWithClassName<T = object> = T & {
  className?: string | undefined;
};

export type ImageProps = {
  data?: {
    id: number;
    attributes: ImageAttributes;
  };
};

export type MenuItemProps = {
  text: string;
  url?: string;
  category?: CategoriesBlog;
};

export type MenuAttributes = DefaultAttributes & {
  name: string;
  menuItems: MenuItemProps[];
};

export type DefaultAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type MenuArray = StrapiFindAllResponse<MenuAttributes>;

export type HeroAttributes = {
  title: string;
  description: string;
  image: ImageProps;
  button: { text: string; url: string };
};

//unUsed

export type DefaultPageAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PageAttributes = DefaultPageAttributes & {
  seo?: SEO;
  slug?: string;
};

export type PageDataAnd<T> = PageAttributes & T;

export type PageDataOr<T> = PageAttributes | T;

export type PropsWithShouldScroll<T = object> = T & {
  shouldScroll?: boolean;
};

export type PropsWithMobileStyle<T = object> = T & {
  mobile?: boolean;
};

export type PropsWithRef<I, T = object> = T & {
  ref?: RefObject<I>;
};

// export type PropsWithCategories<T = object> = T & {
//   categories?: CategoriesArray;
// };

// export type PropsWithTags<T = object> = T & {
//   tags?: TagsArray;
// };

// export type TagAttributes = DefaultPageAttributes & {
//   name: string;
// };

// export type TagsArray = StrapiFindAllResponse<TagAttributes>;

export type BlogPaginationAttributes = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// export type BlogPageListAttributes = DefaultPageAttributes & {
//   blogTitle: string;
//   slug: string;
//   intro: string;
//   categories?: CategoriesArray;
//   tags?: { data: TagsArray };
// };

// export type Pages = {
//   pages: StrapiResponse<BlogPageListAttributes>[];
//   serverPagination?: BlogPaginationAttributes | null;
// };

export type ImagesArray = {
  data?: {
    id: number;
    attributes: ImageAttributes;
  }[];
};

export type ImageAttributes = Omit<SizedImage, 'path'> & {
  alternativeText: string;
  caption: string;
  createdAt: string;
  formats?: Record<string, SizedImage>;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | string;
  updatedAt: string;
};

export type SizedImage = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  url: string;
  width: number;
};

export type HeaderAttribute = {
  title: string;
  subTitle?: string;
  linkText?: string;
  url?: string;
};

export type ExpandingElementAttributes = {
  title: string;
  richText: string;
};

export type LinkAttributes = {
  name: string;
  url: string;
  nofollow: boolean;
  newCard: boolean;
};

export type TitleDescBlock = {
  title: string;
  description: string;
};

export type ShortText = {
  content: string;
};

export type ImageDefault = {
  image: ImageProps;
  title: string;
  description: string;
};

export type ImageSingle = {
  image: ImageProps;
};

export type LinkType = { id: number; name: string; href: string };

export type RouteToAttributes = {
  name: 'page' | 'category' | 'search' | undefined;
  value: string | string[] | undefined;
  slug?: string;
};

export type ImageLinkAttributes = LinkAttributes & {
  image?: ImageProps;
};
