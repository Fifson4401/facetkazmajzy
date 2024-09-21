import { FC } from "react";
import { useRouter } from "next/navigation";
import CategoryChip from "../CategoryChip/CategoryChip";
import { PostTileProps } from "@/api/interfaces/collections/blogPosts";
import TagsLink from "../TagsLink/TagsLink";

const PostTile: FC<PostTileProps> = ({ category, description, slug, sub_category, tags, title }) => {

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`zadania/${slug}`)}
      className="flex flex-col w-full bg-[#FAF3E0] rounded-2xl shadow-lg p-6 hover:bg-[#F1E9D2] transition cursor-pointer"
    >
      <h3 className="text-lg font-semibold pb-2 line-clamp-1 text-[#3D2C29]">{title}</h3>
      <div className="flex flex-row gap-2">
        <CategoryChip isCategory {...category} />
        <CategoryChip {...sub_category} />
      </div>
      <p className="text-sm md:text-base line-clamp-2 pt-4 text-[#2b2b2b]">{description}</p>
      <div className="flex flex-row gap-2 pt-3">
        <TagsLink {...tags} />
      </div>
    </div>

  );
};

export default PostTile;
