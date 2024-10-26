import { ImageProps } from '@/api/interfaces/defaults';
import { Button } from "@nextui-org/button";
import Link from 'next/link';
import { FC } from 'react';
import { ImageHandlerLCP } from '../ImageHandlerLCP';

interface HeroProps {
  title?: string;
  description?: string;
  image?: ImageProps;
  button?: { text: string; url: string };
}

const Hero: FC<HeroProps> = ({ title, description, image, button }) => {
  if (!title || !description || !image || !button) {
    return null;
  }

  return (
    <div className="flex max-w-[100vw] flex-col sm:px-11 lg:flex-row">
      <div className="order-2 mt-8 flex w-full flex-col items-start md:pe-20 lg:order-1 lg:w-1/2 lg:pe-28">
        <h1 className="mb-12 leading-tight max-md:mb-6 sm:text-2xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mb-12 text-sm md:text-xl">{description}</p>
        <Link href={button.url} className="flex w-full">
          <Button
            size="lg"
            className="w-full bg-[#cc3266] text-white shadow-xl sm:w-fit"
          >
            {button.text}
          </Button>
        </Link>
      </div>
      <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:w-1/2">
        <ImageHandlerLCP
          image={image.data?.attributes}
          imageClassName="object-cover max-lg:max-h-[50vh] max-md:max-h-[40vh]"
        />
      </div>
    </div>
  );
};

export default Hero;
