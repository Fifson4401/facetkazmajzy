import { DefaultPageProps, PageAttributes } from "../interfaces/defaults";
import { HomePageAttributes } from "../interfaces/home";
import { getHeaderMenuProps, getPageProps } from "./getPageProps";

export const getHomePageProps = async (): Promise<
  DefaultPageProps<HomePageAttributes>
> => {
  const [{ pageData }, { menu }] = await Promise.all([
    getPageProps<HomePageAttributes>("home-page", populate),
    getHeaderMenuProps(),
  ]);

  console.log("isHomePageAttributes: ", isHomePageAttributes(pageData));
  console.log("pageData: ", pageData);

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
  return data && "header" in data && "search" in data;
}

const populate = {
  header: {
    populate: {
      image: {
        populate: "*",
      },
      button: {
        populate: "*",
      },
    },
  },
  search: {
    populate: {
      image: {
        populate: "*",
      },
    },
  },
};
