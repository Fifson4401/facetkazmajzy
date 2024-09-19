import { DefaultAttributes } from "../defaults";
import { StrapiFindOneResponse } from "../strapiResponse";

export type SubCategoryAttributes = DefaultAttributes & {
  name: string;
  order?: number;
};

export type SubCategoriesBlog = StrapiFindOneResponse<SubCategoryAttributes>;
