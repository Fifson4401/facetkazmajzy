import { RouteToAttributes, UseBlogProps } from "@/api/interfaces/blog";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useCallback } from "react";

export const useBlog = (): UseBlogProps => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const queryURL = Object.fromEntries(searchParams.entries());

  const setRouteTo = useCallback(
    (routeTo: RouteToAttributes) => {
      const { page, category, subCategory, search, tag } = queryURL;

      const queryParams: { [key: string]: string | string[] | undefined } = {
        page,
        category,
        subCategory,
        search,
        tag,
      };

      let query = "?";

      if (routeTo.name === "category" || routeTo.name === "search") {
        queryParams["tag"] = undefined;
        queryParams["page"] = undefined;
      }

      if (routeTo.name) {
        queryParams[routeTo.name] = routeTo.value;
      }

      Object.keys(queryParams).map((key) => {
        if (queryParams[key]) {
          query += `${key}=${queryParams[key]}&`;
        }
      });

      // const navToSection = routeTo.name === "page" ? "#category" : "";
      const url = `/zadania${query.slice(0, -1)}`;

      router.push(url, {
        scroll: routeTo.name === "page",
      });
    },
    [queryURL, router]
  );

  return { query: queryURL, setRouteTo };
};
