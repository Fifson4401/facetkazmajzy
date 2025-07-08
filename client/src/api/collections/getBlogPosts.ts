import qs from 'qs';

import client from '../client';
import { StrapiFindAllResponse } from '../interfaces/strapiResponse';
import { BlogPageProps } from '../interfaces/blog';
import { PostTileProps } from '../interfaces/collections/blogPosts';
import normalizeSearchText from '../utils/normalizeSearchText';
import { cache } from 'react';

export type searchParams = Record<string, string | undefined>;

export const getBlogPosts = cache(
  async (
    searchParams: searchParams
  ): Promise<Pick<BlogPageProps, 'pages' | 'serverPagination'>> => {
    const {
      page = 1,
      search = undefined,
      category = undefined,
      subCategory = undefined,
      tag = undefined,
    } = searchParams;

    const normalizedSearch = search ? normalizeSearchText(search) : undefined;

    const tagsArray = tag ? tag.split(',') : [];

    try {
      const query = qs.stringify(
        {
          fields: ['slug', 'title', 'description'],
          populate: {
            category: { populate: '*' },
            sub_category: { populate: '*' },
            tags: {
               populate: '*' 
            },
          },
          pagination: {
            page: page,
            pageSize: 9,
          },
          filters: {
            contentText: {
              $containsi: normalizedSearch,
            },
            category: { id: { $eq: category } },
            sub_category: { id: { $eq: subCategory } },
            tags: { id: { $in: tagsArray } },
          },
        },
        {
          encodeValuesOnly: true,
        }
      );

      const {
        data: {
          data: pages,
          meta: { pagination: serverPagination },
        },
      } = await client.get<StrapiFindAllResponse<PostTileProps>>(
        `/api/blog-posts?${query}`
      );

      return { pages, serverPagination };
    } catch {
      return { pages: [] };
    }
  }
);
