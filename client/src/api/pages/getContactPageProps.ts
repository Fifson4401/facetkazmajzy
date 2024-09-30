import { ContactPageAttributes } from '../interfaces/contact';
import { DefaultPageProps, PropsWithMenu } from '../interfaces/defaults';
import { getHeaderMenuProps, getPageProps } from './getPageProps';

export const getContactPageProps = async (): Promise<
  DefaultPageProps<ContactPageAttributes & PropsWithMenu>
> => {
  const [{ pageData }, { menu }] = await Promise.all([
    getPageProps<ContactPageAttributes>('contact-page', populate),
    getHeaderMenuProps(),
  ]);

  if (!pageData || !isContactPageProps(pageData)) {
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

function isContactPageProps(data: any): data is ContactPageAttributes {
  return data && 'hero' in data && 'contactInfo' in data && 'pets' in data;
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
  contactInfo: { populate: '*' },
  pets: {
    populate: {
      image: {
        populate: '*',
      },
    },
  },
};
