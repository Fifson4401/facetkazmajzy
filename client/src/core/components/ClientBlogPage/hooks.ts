import {
  RouteToAttributes,
  NameOfRouteProps,
  UseBlogProps,
} from '@/api/interfaces/blog';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useEffect, useRef } from 'react';

const RESET_PARAMS_MAP: Partial<Record<NameOfRouteProps, string[]>> = {
  search: ['tag', 'page'],
  subCategory: ['tag', 'page'],
  category: ['subCategory', 'tag', 'page'],
};

const toggleTags = (
  currentTags: string[],
  tagValue: string | string[]
): string[] => {
  if (typeof tagValue === 'string') {
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
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const queryURL = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );

  const smoothScrollToCategory = useCallback(() => {
    const categoryElement = document.getElementById('category');
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const setRouteTo = useCallback(
    (routeTo: RouteToAttributes) => {
      const params = new URLSearchParams(searchParams.toString());

      const resetParams = RESET_PARAMS_MAP[routeTo.name];
      if (resetParams) {
        resetParams.forEach((param: string) => params.delete(param));
      }

      if (routeTo.name === 'tag' && routeTo.value) {
        let tags = params.get('tag')?.split(',') || [];
        tags = toggleTags(tags, routeTo.value);

        if (tags.length > 0) {
          params.set('tag', tags.join(','));
        } else {
          params.delete('tag');
        }
      } else if (routeTo.name) {
        if (routeTo.value === undefined) {
          params.delete(routeTo.name);
        } else if (typeof routeTo.value === 'string') {
          params.set(routeTo.name, routeTo.value);
        }
      }

      const queryString = params.toString();
      let url = queryString ? `/zadania?${queryString}` : `/zadania`;

      if (routeTo.name === 'page') {
        url += '#category';
      }

      router.push(url, { scroll: false });

      if (routeTo.name === 'page') {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          smoothScrollToCategory();
        }, 100);
      }
    },
    [searchParams, router, smoothScrollToCategory]
  );

  const clearAllQueries = useCallback(() => {
    router.push('/zadania');
  }, [router]);

  useEffect(() => {
    if (window.location.hash === '#category') {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        smoothScrollToCategory();
      }, 100);
    }
  }, [searchParams, smoothScrollToCategory]);

  return { query: queryURL, setRouteTo, clearAllQueries };
};
