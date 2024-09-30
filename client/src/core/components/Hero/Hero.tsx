import { ImageProps } from '@/api/interfaces/defaults';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FC } from 'react';
import { ImageHandler } from '../ImageHandler';

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
    <div className="flex max-w-[100vw] flex-col px-11 lg:flex-row">
      <div className="order-2 mt-8 flex w-full flex-col items-start md:pe-20 lg:order-1 lg:w-1/2 lg:pe-28">
        <h1 className="mb-12 leading-tight max-md:mb-6 sm:text-2xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mb-12 text-sm md:text-xl">{description}</p>
        <Link href={button.url}>
          <Button size="lg" className="bg-[#cc3266] text-white shadow-xl">
            {button.text}
          </Button>
        </Link>
      </div>
      <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:w-1/2">
        <ImageHandler
          image={image.data?.attributes}
          priority
          removeWrapper
          imageClassName="object-cover max-lg:max-h-[50vh] max-md:max-h-[40vh]"
        />
      </div>
    </div>
  );
};

export default Hero;
