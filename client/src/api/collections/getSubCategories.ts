import qs from "qs";

import client from "../client";
import { SubCategoriesBlog } from "../interfaces/collections/subCategories";

export const getSubCategories = async (
  categoryID?: string
): Promise<{
  subCategories?: SubCategoriesBlog;
}> => {
  if (!categoryID) {
    return { subCategories: undefined };
  }

  try {
    const query = qs.stringify({
      filters: {
        category: {
          id: {
            $eq: categoryID,
          },
        },
      },
    });

    const { data: subCategories } = await client.get<SubCategoriesBlog>(
      `/api/sub-categories?${query}`
    );
    return { subCategories };
  } catch {
    return { subCategories: undefined };
  }
};
