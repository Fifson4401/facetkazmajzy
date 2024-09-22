import { FC } from 'react';
import { PropsWithBlogPages } from '@/api/interfaces/blog';
import PostTile from '../PostTile/PostTile';

const PostList: FC<PropsWithBlogPages> = ({ pages }) => {
  if (!pages) {
    return null;
  }

  return (
    <div className="flex w-full flex-col space-y-4">
      {pages.map(({ attributes, id }, index) => (
        <PostTile {...attributes} key={`PostTile_${id}_${index}`} />
      ))}
    </div>
  );
};

export default PostList;
