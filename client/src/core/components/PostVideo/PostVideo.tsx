import React, { FC } from 'react';
import { BlogPostVideo } from '@/api/interfaces/blogPost';

interface PostVideoProps {
  video?: BlogPostVideo;
}

const PostVideo: FC<PostVideoProps> = ({ video }) => {
  if (!video || !video.embedURL) {
    return null;
  }

  return (
    <div className="flex w-full justify-center md:px-11">
      <div className="w-full max-w-[75%]">
        {video.title && (
          <h2 className="pb-4 pt-6 text-center text-3xl">{video.title}</h2>
        )}
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={video.embedURL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default PostVideo;
