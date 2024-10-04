import { DefaultAttributes } from '../defaults';
import {
  StrapiFindAllResponse,
  StrapiFindOneResponse,
  StrapiResponse,
} from '../strapiResponse';

export type PropsWithCategories<T = object> = T & {
  categories?: CategoriesArray;
};

export type PropsWithCategory<T = object> = T & {
  category?: { data: StrapiResponse<CategoryAttributes> };
};

export type CategoryAttributes = DefaultAttributes & {
  id: number;
  name: string;
  order?: number;
};

export type CategoriesBlog = StrapiFindOneResponse<CategoryAttributes>;
export type CategoriesArray = StrapiFindAllResponse<CategoryAttributes>;
