import { FC } from "react";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { TagsArray } from "@/api/interfaces/collections/tags";

const TagsChip: FC<TagsArray> = ({ data }) => {

  if (!data) {
    return null;
  }

  const isYear = (name: string) => {
    const year = parseInt(name);
    return !isNaN(year) && year >= 1900 && year <= 2100;
  };


  return (
    <>
      {data.map((item, index) => {
        const tagName = item.attributes.name;
        const tagStyles = isYear(tagName) ? "bg-[#6D597A] hover:bg-[#B56576]" : "bg-[#9AA357] hover:bg-[#616F39]"


        return (
          <Link href={`/zadania?tags=${item.id}`} key={`Tags_${index}_${item.id}`} passHref>
            <Chip
              size="sm"
              className={`text-white transition ${tagStyles}`}
              onClick={(e) => e.stopPropagation()}
            >
              {item.attributes.name}
            </Chip>
          </Link>
        )
      })}</>

  );
};

export default TagsChip;
