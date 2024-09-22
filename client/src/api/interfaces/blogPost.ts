import {
  CategoryAttributes,
  PropsWithCategory,
} from './collections/categories';
import {
  PropsWithSubCategory,
  SubCategoryAttributes,
} from './collections/subCategories';
import { PropsWithTags, TagsArray } from './collections/tags';
import { ImageProps, PageAttributes } from './defaults';

type ContentType = 'tex' | 'image';

export type PageDataT<T> = PageAttributes & T;

export type BlogSlugPageAttributes = PageAttributes & {
  title: string;
  description?: string;
  content?: BlogPostContentTypes[];
  answer?: BlogPageAnswerProps;
} & PropsWithTags &
  PropsWithCategory &
  PropsWithSubCategory;

export type BlogPostTEX = { TEX: string; type: ContentType };
export type BlogPostImage = { image: ImageProps; type: ContentType };

export type BlogPostSource = { text: string; url?: string };

export type BlogPostContentTypes = BlogPostTEX | BlogPostImage;

export type BlogPageContentProps = {
  content: BlogPostContentTypes[];
};

export type BlogPageAnswerProps = {
  TEX?: string;
  image?: ImageProps;
};

export type BlogPostProps = BlogPageContentProps & {
  source: BlogPostSource;
  title: string;
  description: string;
  category: CategoryAttributes;
  sub_category: SubCategoryAttributes;
  tags: TagsArray;
};
