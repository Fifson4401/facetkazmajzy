import { CategoriesBlog } from "./categories";
import { SubCategoriesBlog } from "./subCategories";
import { TagsArray } from "./tags";

export type PostTileProps = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: TagsArray;
  category: CategoriesBlog;
  sub_category: SubCategoriesBlog;
};
