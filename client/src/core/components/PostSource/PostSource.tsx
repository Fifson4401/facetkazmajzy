import { FC } from 'react';
import { BlogPostSource } from '@/api/interfaces/blogPost';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';

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
      <div className="flex flex-row gap-2 pt-4">
        <p>{source.text}</p>
        {!!source.url && (
          <Link href={source.url} rel="external noreferrer noopener nofollow">
            {source.url}
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostSource;
