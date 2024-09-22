import qs from 'qs';

import { CategoriesArray } from '../interfaces/collections/categories';
import client from '../client';

export const getCategories = async (): Promise<{
  categories?: CategoriesArray;
}> => {
  try {
    const query = qs.stringify(
      {
        filters: {
          blog_posts: {
            id: {
              $notNull: true,
            },
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    const { data: categories } = await client.get<CategoriesArray>(
      `/api/categories?${query}`
    );
    return { categories };
  } catch (e) {
    return { categories: undefined };
  }
};
