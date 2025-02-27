import { useState, useEffect } from 'react';
import axios from 'axios';
import { BlogSlugPageAttributes } from '@/api/interfaces/blogPost';

interface UseRelatedPostProps {
  slug: string;
  category: BlogSlugPageAttributes['category'];
  subCategory: BlogSlugPageAttributes['sub_category'];
  tags: BlogSlugPageAttributes['tags'];
}


const useRandomPost = ({ slug, category, tags, subCategory }: UseRelatedPostProps) => {
  const [posts, setPosts] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!category || !slug) {
      setRandomSlug(null);
      return;
    }

    const categoryName = category.data.attributes.name?.toLowerCase();

    if (!categoryName || !VALID_CATEGORIES.includes(categoryName)) {
      setRandomSlug(null);
      return;
    }

    const controller = new AbortController();

    const fetchRandomPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get<{ slug: string }>('/api/random', {
          params: { category: category.data.id, slug },
          signal: controller.signal,
        });
        setRandomSlug(response.data.slug || null);
      } catch (e: any) {
        if (!axios.isCancel(e)) {
          console.error(e);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRandomPost();

    return () => controller.abort();
  }, [slug, category]);

  return { randomSlug, loading };
};

export default useRandomPost;
