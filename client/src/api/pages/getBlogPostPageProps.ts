import { BlogPageAttributes } from '../interfaces/blog';
import { BlogSlugPageAttributes } from '../interfaces/blogPost';
import { DefaultPageProps, PropsWithMenu } from '../interfaces/defaults';
import { getHeaderMenuProps, getPageProps } from './getPageProps';

export const getBlogPostPageProps = async (
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
};

function isBlogPostPageProps(data: any): data is BlogSlugPageAttributes {
  return data && 'content' in data && 'answer' in data && 'source' in data;
}

const populate = {
  fields: ['title', 'description'],
  content: {
    populate: {
      image: {
        populate: '*',
      },
    },
  },
  answer: {
    populate: {
      image: {
        populate: '*',
      },
    },
  },
  source: {
    populate: '*',
  },
  category: { populate: { name: { populate: '*' } } },
  sub_category: { populate: { name: { populate: '*' } } },
  tags: {
    populate: {
      name: { populate: '*' },
    },
  },
};
