'use client';

import { Divider, Image } from '@nextui-org/react';
import { FC } from 'react';
import { TagsArray } from '@/api/interfaces/collections/tags';
import TagChip from '../TagChip/TagChip';
import { getDisplayCategory } from '../CategoryChip/utils';
import { BlogSlugPageAttributes } from '@/api/interfaces/blogPost';
import { useRouter } from 'next/navigation';
import useRandomPost from './hook';
import Link from 'next/link';

interface PostHeaderProps
  extends Pick<BlogSlugPageAttributes, 'category' | 'sub_category'> {
  title: string;
  tags?: TagsArray;
  slug?: string;
}

const PostHeader: FC<PostHeaderProps> = ({
  title,
  tags,
  category,
  sub_category,
  slug = '',
}) => {
  const router = useRouter();

  // Tworzenie linków bez useMemo
  const categoryLink = category ? `/zadania?category=${category.data.id}` : '#';
  const subCategoryID = sub_category?.data?.id;
  const subCategoryLink = subCategoryID
    ? `${categoryLink}&subCategory=${subCategoryID}`
    : categoryLink;

  const { randomSlug, loading } = useRandomPost({ category, slug });

  return (
    <div className="flex w-full flex-col md:px-11">
      <div className="mb-6 flex w-full flex-row justify-between md:mt-8">
        <div>
          <h1 className="mb-4 font-medium leading-tight sm:text-2xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <div className="mb-4 flex flex-row gap-4">
            {category && (
              <TagChip
                name={category.data.attributes.name}
                size="lg"
                onClick={() => router.push(categoryLink)}
              />
            )}
            {subCategoryID && (
              <TagChip
                name={getDisplayCategory(
                  sub_category?.data.attributes.name || ''
                )}
                size="lg"
                onClick={() => router.push(subCategoryLink)}
              />
            )}
          </div>
          <div className="flex gap-2">
            {tags?.data.map((item) => (
              <TagChip
                name={item.attributes.name}
                key={`Post_Tag_${item.id}`}
                onClick={() => router.push(`/zadania?tags=${item.id}`)}
              />
            ))}
          </div>
        </div>
        {randomSlug && !loading && (
          <Link href={`/zadania/${randomSlug}`} className="group flex flex-col">
            <p className="pb-1 group-hover:opacity-70">Wylosuj zadanie!</p>
            <Image
              alt="Kości do gry"
              aria-label="Wylosuj kolejne zadanie"
              src="/dices.webp"
              width={105}
              height={105}
              className="mx-auto flex group-hover:opacity-70"
              removeWrapper
            />
          </Link>
        )}
      </div>
      <Divider />
    </div>
  );
};

export default PostHeader;
