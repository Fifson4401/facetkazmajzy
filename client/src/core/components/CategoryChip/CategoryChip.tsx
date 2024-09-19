import { FC } from "react";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { CategoriesBlog } from "@/api/interfaces/collections/categories";
import { SubCategoriesBlog } from "@/api/interfaces/collections/subCategories";

const CategoryChip: FC<CategoriesBlog | SubCategoriesBlog & { isCategory: boolean }> = ({ data }, isCategory = false) => {

  if (!data) {
    return null;
  }

  const url = isCategory ? `/zadania?category=${data.id}` : `/zadania?subCategory=${data.id}`

  return (

    <Link href={url} passHref>
      <Chip
        size="md"
        className="bg-[#D4A373] text-white hover:bg-[#BF8B67] transition"
        onClick={(e) => e.stopPropagation()}
      >
        {data.attributes.name}
      </Chip>
    </Link>


  );
};

export default CategoryChip;
