import { useState, useEffect } from "react";
import {
  SubCategoriesGetResponse,
  SubCategoryAttributes,
} from "@/api/interfaces/collections/subCategories";
import axios, { AxiosResponse } from "axios";
import qs from "qs";
import { StrapiResponse } from "@/api/interfaces/strapiResponse";

interface useSubCategoryProps {
  query?: Record<string, string | undefined>;
}

const useSubCategory = ({ query }: useSubCategoryProps) => {
  const [subCategories, setSubCategories] = useState<
    StrapiResponse<SubCategoryAttributes>[]
  >([]);

  useEffect(() => {
    const queryURL = qs.stringify({
      filters: {
        blog_posts: {
          id: {
            $notNull: true,
          },
        },
        category: {
          id: {
            $eq: query?.category,
          },
        },
      },
    });

    const controller = new AbortController();

    const fetchData = () =>
      axios.get(`/api/sub-categories?${queryURL}`, {
        signal: controller.signal,
      });

    query?.category &&
      fetchData()
        .then((response: AxiosResponse<SubCategoriesGetResponse>) => {
          if (response?.data?.data) {
            setSubCategories(response.data.data);
          }
        })
        .catch((e) => {
          console.error(e);
        });

    return () => {
      controller.abort();
    };
  }, [query?.category]);

  return { subCategories };
};

export default useSubCategory;
