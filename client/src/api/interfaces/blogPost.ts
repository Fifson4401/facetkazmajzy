import {
  CategoryAttributes,
  PropsWithCategory,
} from "./collections/categories";
import {
  PropsWithSubCategory,
  SubCategoryAttributes,
} from "./collections/subCategories";
import { PropsWithTags, TagsArray } from "./collections/tags";
import { ImageProps, PageAttributes } from "./defaults";

export type PageDataT<T> = PageAttributes & T;

export type BlogSlugPageAttributes = PageAttributes & {
  title: string;
  description?: string;
} & PropsWithTags &
  PropsWithCategory &
  PropsWithSubCategory;

type BlogPostTEX = string;
type BlogPostImage = { image: ImageProps };

export type BlogPostSource = { text: string; url?: string };

export type BlogPostContentTypes = BlogPostTEX | BlogPostImage;

export type BlogPageContentProps = {
  content: BlogPostContentTypes[];
};

export type BlogPostProps = BlogPageContentProps & {
  source: BlogPostSource;
  title: string;
  description: string;
  category: CategoryAttributes;
  sub_category: SubCategoryAttributes;
  tags: TagsArray;
};
