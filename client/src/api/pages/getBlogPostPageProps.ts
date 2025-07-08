import { cache } from 'react';
import { BlogPageAttributes } from '../interfaces/blog';
import { BlogSlugPageAttributes } from '../interfaces/blogPost';
import { DefaultPageProps, PropsWithMenu } from '../interfaces/defaults';
import { getHeaderMenuProps, getPageProps } from './getPageProps';

export const getBlogPostPageProps = cache(
  async (
    slug: string
  ): Promise<DefaultPageProps<BlogSlugPageAttributes & PropsWithMenu>> => {
    const [{ pageData }, { menu }] = await Promise.all([
      getPageProps<BlogPageAttributes>(`blog-posts/${slug}`, populate),
      getHeaderMenuProps(),
    ]);

    if (!pageData || !isBlogPostPageProps(pageData)) {
      return {
        pageData: null,
      };
    }

    return {
      pageData: {
        ...pageData,
        menu,
      },
    };
  }
);

function isBlogPostPageProps(data: any): data is BlogSlugPageAttributes {
  return data && 'content' in data && 'answer' in data && 'source' in data;
}

const populate = {
  fields: ['title', 'description'],
  content: {
    populate: '*',
  },
  answer: {
    populate: '*',
  },
  source: {
    populate: '*',
  },
  video: {
    populate: '*',
  },
  category: { populate: '*' },
  sub_category: { populate: '*' },
  tags: { populate: '*' },
};
