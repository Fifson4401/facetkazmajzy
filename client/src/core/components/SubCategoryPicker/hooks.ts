import { useState, useEffect } from "react";
import {
  SubCategoriesGetResponse,
  SubCategoryAttributes,
} from "@/api/interfaces/collections/subCategories";
import axios, { AxiosResponse, AxiosError } from "axios";
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

    if (query?.category) {
      fetchData()
        .then((response: AxiosResponse<SubCategoriesGetResponse>) => {
          if (response?.data?.data) {
            setSubCategories(response.data.data);
          }
        })
        .catch((error: AxiosError) => {
          if (error.code !== "ERR_CANCELED") {
            console.error(error);
          }
          // Opcjonalnie możesz obsłużyć anulowanie tutaj, jeśli potrzebujesz
        });
    }

    return () => {
      controller.abort();
    };
  }, [query?.category]);

  return { subCategories };
};

export default useSubCategory;
