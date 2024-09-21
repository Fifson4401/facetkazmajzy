import {
  RouteToAttributes,
  NameOfRouteProps,
  UseBlogProps,
} from "@/api/interfaces/blog";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

const RESET_PARAMS_MAP: Partial<Record<NameOfRouteProps, string[]>> = {
  search: ["tag", "page"],
  subCategory: ["tag", "page"],
  category: ["subCategory", "tag", "page"],
};

const toggleTags = (
  currentTags: string[],
  tagValue: string | string[]
): string[] => {
  if (typeof tagValue === "string") {
    return currentTags.includes(tagValue)
      ? currentTags.filter((t) => t !== tagValue)
      : [...currentTags, tagValue];
  } else if (Array.isArray(tagValue)) {
    return Array.from(new Set([...currentTags, ...tagValue]));
  }
  return currentTags;
};

export const useBlog = (): UseBlogProps => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Memoizacja queryURL dla optymalizacji
  const queryURL = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );

  const setRouteTo = useCallback(
    (routeTo: RouteToAttributes) => {
      const params = new URLSearchParams(searchParams.toString());

      const resetParams = RESET_PARAMS_MAP[routeTo.name];
      if (resetParams) {
        resetParams.forEach((param: string) => params.delete(param));
      }

      if (routeTo.name === "tag" && routeTo.value) {
        let tags = params.get("tag")?.split(",") || [];
        tags = toggleTags(tags, routeTo.value);

        if (tags.length > 0) {
          params.set("tag", tags.join(","));
        } else {
          params.delete("tag");
        }
      } else if (routeTo.name) {
        if (routeTo.value === undefined) {
          params.delete(routeTo.name);
        } else if (typeof routeTo.value === "string") {
          params.set(routeTo.name, routeTo.value);
        }
        // Możesz dodać obsługę innych typów wartości, jeśli to konieczne
      }

      const queryString = params.toString();
      const url = queryString ? `/zadania?${queryString}` : `/zadania`;

      router.push(url, {
        scroll: routeTo.name === "page",
      });
    },
    [searchParams, router]
  );

  const clearAllQueries = useCallback(() => {
    router.push("/zadania");
  }, [router]);

  return { query: queryURL, setRouteTo, clearAllQueries };
};
