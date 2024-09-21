import { DefaultAttributes } from "../defaults";
import {
  Pagination,
  StrapiFindAllResponse,
  StrapiFindOneResponse,
  StrapiResponse,
} from "../strapiResponse";

export type SubCategoryAttributes = DefaultAttributes & {
  name: string;
  order?: number;
};

export type PropsWithSubCategories<T = object> = T & {
  categories?: SubCategoriesArray;
};

export type SubCategoriesBlog = StrapiFindOneResponse<SubCategoryAttributes>;
export type SubCategoriesArray = StrapiFindAllResponse<SubCategoryAttributes>;

export type SubCategoriesGetResponse = {
  data: StrapiResponse<SubCategoryAttributes>[];
  meta: {
    pagination: Pagination;
  };
};
