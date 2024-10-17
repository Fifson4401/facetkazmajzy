import qs from 'qs';

import client from '../client';
import { SubCategoriesArray } from '../interfaces/collections/subCategories';
import { cache } from 'react';

export const getSubCategories = cache(
  async (
    categoryID?: string
  ): Promise<{
    subCategories?: SubCategoriesArray;
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

      const { data: subCategories } = await client.get<SubCategoriesArray>(
        `/api/sub-categories?${query}`
      );
      return { subCategories };
    } catch {
      return { subCategories: undefined };
    }
  }
);
