import { ParsedUrlQuery } from 'querystring';
import {
  DefaultPageProps,
  MenuArray,
  PageDataAnd,
  PageDataOr,
} from '../interfaces/defaults';
import qs from 'qs';
import client from '../client';
import { StrapiFindOneResponse } from '../interfaces/strapiResponse';
import { notFound } from 'next/navigation';

export const getPageProps = async <T>(
  url: string,
  _populate?: Record<string, object>,
  query?: ParsedUrlQuery
): Promise<DefaultPageProps<PageDataOr<T>>> => {
  const queryParams = query ? `&${qs.stringify(query)}` : '';

  try {
    const {
      data: {
        data: { attributes },
      },
    } = await client.get<StrapiFindOneResponse<PageDataAnd<T>>>(
      `api/${url}?${seoQuery(_populate)}${queryParams}`
    );

    return { pageData: attributes };
  } catch (error) {
    console.error('Error fetching HomePage data:', error);
    notFound();
  }
};

export const seoQuery = (populate: Record<string, object> = {}): string => {
  const query = qs.stringify(
    {
      populate: {
        seo: {
          populate: {
            metaImage: { populate: '*' },
          },
        },
        ...populate,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  return query;
};

export const getHeaderMenuProps = async (): Promise<{ menu: MenuArray }> => {
  try {
    const query = qs.stringify({
      populate: {
        category: { populate: '*' },
        menuItems: { populate: '*' },
        populate: '*',
      },
      filters: {
        name: {
          $eq: 'header',
        },
      },
    });

    const { data: menu } = await client.get<MenuArray>(`/api/menus?${query}`);

    return { menu };
  } catch {
    return { menu: { data: [], meta: {} } };
  }
};
