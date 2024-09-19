import { DefaultAttributes } from "../defaults";
import { StrapiFindOneResponse } from "../strapiResponse";

export type CategoryAttributes = DefaultAttributes & {
  name: string;
  order?: number;
};

export type CategoriesBlog = StrapiFindOneResponse<CategoryAttributes>;
