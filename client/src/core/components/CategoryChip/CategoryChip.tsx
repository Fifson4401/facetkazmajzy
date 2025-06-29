import { FC } from 'react';
import Link from 'next/link';
import { Chip } from "@heroui/chip";
import { CategoriesBlog } from '@/api/interfaces/collections/categories';
import { SubCategoriesBlog } from '@/api/interfaces/collections/subCategories';
import { getDisplayCategory } from './utils';

interface CategoryChipProps {
  category: CategoriesBlog | SubCategoriesBlog;
  parentID?: number;
  isCategory?: boolean;
}

const CategoryChip: FC<CategoryChipProps> = ({
  category,
  isCategory,
  parentID,
}) => {
  if (!category.data) {
    return null;
  }

  const url = isCategory
    ? `/zadania?category=${category.data.id}`
    : parentID
      ? `/zadania?category=${parentID}&subCategory=${category.data.id}`
      : `/zadania?subCategory=${category.data.id}`;

  const displayName = isCategory
    ? category.data.attributes.name
    : getDisplayCategory(category.data.attributes.name);

  return (
    <Link href={url} passHref>
      <Chip
        size="md"
        className="bg-[#005C99] text-white transition hover:bg-[#fa6bb4]"
        onClick={(e) => e.stopPropagation()}
      >
        {displayName}
      </Chip>
    </Link>
  );
};

export default CategoryChip;
