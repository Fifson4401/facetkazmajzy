import { DefaultAttributes } from "../defaults";
import {
  StrapiFindAllResponse,
  StrapiFindOneResponse,
} from "../strapiResponse";

export type PropsWithCategories<T = object> = T & {
  categories?: CategoriesArray;
};

export type CategoryAttributes = DefaultAttributes & {
  name: string;
  order?: number;
};

export type CategoriesBlog = StrapiFindOneResponse<CategoryAttributes>;
export type CategoriesArray = StrapiFindAllResponse<CategoryAttributes>;
