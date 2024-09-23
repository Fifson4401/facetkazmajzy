import { FC } from 'react';
import { BlogPostSource } from '@/api/interfaces/blogPost';
import { Divider } from '@nextui-org/react';

interface PostSourceProps {
  source?: BlogPostSource;
}

const PostSource: FC<PostSourceProps> = ({ source }) => {
  if (!source) {
    return null;
  }

  return (
    <div className="w-full md:px-11">
      <Divider />
      <div className="flex flex-row gap-3 pt-4">
        <p>{source.text}</p>
        <p>{source.url}</p>
      </div>
    </div>
  );
};

export default PostSource;
