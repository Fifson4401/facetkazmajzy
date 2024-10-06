'use client';

import React, { FC } from 'react';
import { BlogPostVideo } from '@/api/interfaces/blogPost';

interface PostVideoProps {
  video?: BlogPostVideo;
}

const PostVideo: FC<PostVideoProps> = ({ video }) => {
  if (!video || !video.embedURL) {
    return null;
  }

  const embedURL = video.embedURL.replace(
    'www.youtube.com',
    'www.youtube-nocookie.com'
  );

  return (
    <div className="flex w-full justify-center md:px-11">
      <div className="w-full md:max-w-[75%]">
        {video.title && (
          <h2 className="pb-4 pt-6 text-center text-lg md:text-3xl">
            {video.title}
          </h2>
        )}
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={embedURL}
            loading="lazy"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default PostVideo;
