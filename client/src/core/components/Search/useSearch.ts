import { useMemo } from 'react';
import { SubCategoryAttributes } from '@/api/interfaces/collections/subCategories';
import { StrapiResponse } from '@/api/interfaces/strapiResponse';
import { CategoriesArray } from '@/api/interfaces/collections/categories';
import { getDisplayCategory } from '../CategoryChip/utils';

interface useChipsProps {
  query?: Record<string, string | undefined>;
  categories?: CategoriesArray;
  subCategories?: StrapiResponse<SubCategoryAttributes>[];
}

const useSearch = ({ query, categories, subCategories }: useChipsProps) => {
  const showDeleteAll = useMemo(
    () => Object.keys(query || {}).length > 1,
    [query]
  );

  const categoryName = useMemo(() => {
    const categoryId = query?.category
      ? Object.values(query.category)[0]
      : undefined;
    const category = categories?.data.find(
      (item) => item.id.toString() === categoryId
    );
    return category?.attributes.name;
  }, [query, categories]);

  const subCategoryName = useMemo(() => {
    const subCategoryId = query?.subCategory
      ? Object.values(query.subCategory)[0]
      : undefined;
    const subCategory = subCategories?.find(
      (item) => item.id.toString() === subCategoryId
    );
    return subCategory
      ? getDisplayCategory(subCategory.attributes.name || '')
      : undefined;
  }, [query, subCategories]);

  return { showDeleteAll, categoryName, subCategoryName };
};

export default useSearch;
