import { useState, useEffect } from "react";
import { SubCategoryAttributes } from "@/api/interfaces/collections/subCategories";
import { StrapiResponse } from "@/api/interfaces/strapiResponse";
import { TagsArray } from "@/api/interfaces/collections/tags";

interface useChipsProps {
  query?: Record<string, string | undefined>;
  tags?: TagsArray;
}

const useListChips = ({ query, tags }: useChipsProps) => {
  const [filteredTags, setFilteredTags] = useState<
    StrapiResponse<SubCategoryAttributes>[]
  >([]);

  useEffect(() => {
    if (tags && query) {
      setFilteredTags(
        tags.data.filter(
          (value) => !query?.tag?.split(",").includes(value.id.toString())
        )
      );
    }
  }, [query, tags]);

  return { filteredTags };
};

export default useListChips;
