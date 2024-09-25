'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import CategoryChip from '../CategoryChip/CategoryChip';
import { PostTileProps } from '@/api/interfaces/collections/blogPosts';
import TagsLink from '../TagsLink/TagsLink';
import { parseContent } from '../PostContentRenderer/PostContentRenderer';

const PostTile: FC<PostTileProps> = ({
  category,
  description,
  slug,
  sub_category,
  tags,
  title,
}) => {
  const router = useRouter();

  const parsedElements = description ? parseContent(description) : '';
  return (
    <div
      onClick={() => router.push(`zadania/${slug}`)}
      className="flex w-full cursor-pointer flex-col rounded-2xl bg-[#FAF3E0] p-6 shadow-lg transition hover:bg-[#F1E9D2]"
    >
      <h3 className="line-clamp-1 pb-2 text-lg font-semibold text-[#3D2C29]">
        {title}
      </h3>
      <div className="flex flex-row gap-2">
        <CategoryChip isCategory {...category} />
        <CategoryChip {...sub_category} />
      </div>
      <p className="line-clamp-2 pt-4 text-sm text-[#2b2b2b] md:text-base">
        {parsedElements}
      </p>
      <div className="flex flex-row gap-2 pt-3">
        <TagsLink {...tags} />
      </div>
    </div>
  );
};

export default PostTile;
