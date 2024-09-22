import { FC } from 'react';
import Link from 'next/link';
import { TagsArray } from '@/api/interfaces/collections/tags';
import TagChip from '../TagChip/TagChip';

const TagsLink: FC<TagsArray> = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((item, index) => {
        return (
          <Link
            href={`/zadania?tags=${item.id}`}
            key={`Tags_${index}_${item.id}`}
            passHref
          >
            <TagChip tag={item.attributes} />
          </Link>
        );
      })}
    </>
  );
};

export default TagsLink;
