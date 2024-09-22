import { FC } from "react";
import { Chip, ChipProps } from "@nextui-org/react";
import { TagAttributes, TagsArray } from "@/api/interfaces/collections/tags";
import { isTagYear } from "./utils";

interface TagsChipProps extends ChipProps {
  name?: string
  tag?: TagAttributes
  onClick?: () => void
}

const TagChip: FC<TagsChipProps> = ({ tag, onClick, size = 'sm', name, ...props }) => {

  const tagName = tag?.name || name || '';
  const tagStyles = isTagYear(tagName) ? "bg-[#460076] hover:bg-[#fa6bb4]" : "bg-[#a40066] hover:bg-[#fa6bb4] "

  return (
    <Chip
      size={size}
      className={`text-white transition cursor-pointer ${tagStyles}`}
      onClick={(e) => {
        e.stopPropagation()
        onClick ? onClick() : null
      }}
      {...props}
    >
      {tagName}
    </Chip>
  );
};

export default TagChip;
