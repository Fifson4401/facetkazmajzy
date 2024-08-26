import { DefaultPageProps, PageAttributes } from "../interfaces/defaults";
import { HomePageAttributes } from "../interfaces/home";
import { getPageProps } from "./getPageProps";

export const getHomePageProps = async (): Promise<{
  props: DefaultPageProps<HomePageAttributes | PageAttributes>;
}> => {
  return getPageProps<HomePageAttributes>("home-page", populate);
};

const populate = {
  header: {
    populate: {
      image: {
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
