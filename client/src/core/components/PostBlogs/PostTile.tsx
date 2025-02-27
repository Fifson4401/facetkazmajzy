import { useRouter } from "next/router";
import { FC } from "react";
import CategoryChip from "../CategoryChip/CategoryChip";
import PostContentRenderer from "../PostContentRenderer/PostContentRenderer";
import TagChip from "../TagChip/TagChip";
import { BlogSlugPageAttributes } from "@/api/interfaces/blogPost";
import { TagsArray } from "@/api/interfaces/collections/tags";

interface RelatedPostTileProps extends Pick<BlogSlugPageAttributes, 'category' | 'sub_category'> {
  title: string;
  description: string;
  tags?: TagsArray;
  slug?: string;
}
const RelatedPostTile: FC<RelatedPostTileProps> = ({ title, description, slug, category, sub_category, tags }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`zadania/${slug}`)}
      className="flex aspect-square w-full cursor-pointer flex-col rounded-2xl bg-[#FAF3E0] p-6 shadow-lg transition hover:bg-[#F1E9D2]"
    >
      <h3 className="line-clamp-1 pb-2 text-lg font-semibold text-[#3D2C29]">
        {title}
      </h3>
      <div className="flex flex-row flex-wrap gap-2">
        <CategoryChip isCategory category={category} />
        <CategoryChip category={sub_category} parentID={category?.data?.id} />
      </div>
      <div className="line-clamp-2 pt-4 text-sm text-[#2b2b2b] md:text-base">
        <PostContentRenderer content={description} />
      </div>
      <div className="mt-auto flex flex-row flex-wrap gap-2 pt-3">
        {tags?.data.map((tag) => (
          <TagChip
            key={tag.id}
            name={tag.attributes.name}
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/zadania?tags=${tag.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};