import { getCategories } from '../collections/getCategories';
import { getTags } from '../collections/getTags';
import { BlogPageAttributes } from '../interfaces/blog';
import { DefaultPageProps, PropsWithMenu } from '../interfaces/defaults';
import { getHeaderMenuProps, getPageProps } from './getPageProps';
import { getBlogPosts, searchParams } from '@/api/collections/getBlogPosts';

export const getBlogPageProps = async (
  searchParams: searchParams
): Promise<DefaultPageProps<BlogPageAttributes & PropsWithMenu>> => {
  const [
    { pageData },
    { menu },
    { categories },
    { pages, serverPagination },
    { tags },
  ] = await Promise.all([
    getPageProps<BlogPageAttributes>('blog-page', populate),
    getHeaderMenuProps(),
    getCategories(),
    getBlogPosts(searchParams),
    getTags(),
  ]);

  if (!pageData || !isBlogPageAttributes(pageData)) {
    return {
      pageData: null,
    };
  }

  return {
    pageData: {
      ...pageData,
      menu,
      categories,
      pages,
      serverPagination: serverPagination,
      tags,
    },
  };
};

function isBlogPageAttributes(data: any): data is BlogPageAttributes {
  return data && 'search' in data;
}

const populate = {
  header: {
    populate: {
      image: {
        populate: '*',
      },
      button: {
        populate: '*',
      },
    },
  },
  search: {
    populate: {
      image: {
        populate: '*',
      },
    },
  },
};
