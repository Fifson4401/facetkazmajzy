import { FC } from 'react';
import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { CategoriesBlog } from '@/api/interfaces/collections/categories';
import { SubCategoriesBlog } from '@/api/interfaces/collections/subCategories';
import { getDisplayCategory } from './utils';

const CategoryChip: FC<
  CategoriesBlog | (SubCategoriesBlog & { isCategory?: boolean })
> = ({ data }, isCategory = false) => {
  if (!data) {
    return null;
  }

  const url = isCategory
    ? `/zadania?category=${data.id}`
    : `/zadania?subCategory=${data.id}`;

  return (
    <Link href={url} passHref>
      <Chip
        size="md"
        className="bg-[#005C99] text-white transition hover:bg-[#fa6bb4]"
        onClick={(e) => e.stopPropagation()}
      >
        {getDisplayCategory(data.attributes.name)}
      </Chip>
    </Link>
  );
};

export default CategoryChip;
