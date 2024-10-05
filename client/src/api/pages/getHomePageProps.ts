import { DefaultPageProps, PropsWithMenu } from '../interfaces/defaults';
import { HomePageAttributes } from '../interfaces/home';
import { getHeaderMenuProps, getPageProps } from './getPageProps';

export const getHomePageProps = async (): Promise<
  DefaultPageProps<HomePageAttributes & PropsWithMenu>
> => {
  const [{ pageData }, { menu }] = await Promise.all([
    getPageProps<HomePageAttributes>('home-page', populate),
    getHeaderMenuProps(),
  ]);

  if (!pageData || !isHomePageAttributes(pageData)) {
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

function isHomePageAttributes(data: any): data is HomePageAttributes {
  return data && 'hero' in data && 'search' in data;
}

const populate = {
  hero: {
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
    populate: '*',
  },
};
