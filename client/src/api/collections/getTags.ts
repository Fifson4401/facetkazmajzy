import qs from 'qs';

import client from '../client';
import { TagsArray } from '../interfaces/collections/tags';

export const getTags = async (): Promise<{
  tags?: TagsArray;
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

    const { data: tags } = await client.get<TagsArray>(`/api/tags?${query}`);
    return { tags };
  } catch (e) {
    return { tags: undefined };
  }
};
