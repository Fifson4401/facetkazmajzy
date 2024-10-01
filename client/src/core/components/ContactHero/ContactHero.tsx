import { ImageProps } from '@/api/interfaces/defaults';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FC } from 'react';
import { ImageHandler } from '../ImageHandler';

interface ContactHeroProps {
  title?: string;
  description?: string;
  image?: ImageProps;
  button?: { text: string; url: string };
}

const ContactHero: FC<ContactHeroProps> = ({ title, description, image, button }) => {

  if (!title || !description || !image || !button) {
    return null;
  }

  return (
    <div className="flex max-w-[100vw] flex-col p-8 lg:p-11 lg:flex-row bg-[#e8e1d8] rounded-3xl justify-evenly relative">
      <div className="order-1 mt-8 flex w-full flex-col items-start lg:order-2 lg:w-1/2 mb-14">
        <h1 className="mb-12 leading-tight max-md:mb-6 sm:text-2xl md:text-3xl">
          {title}
        </h1>
        <p className="mb-12 text-sm md:text-xl">{description}</p>
        <Link href={button.url}>
          <Button size="lg" className="bg-[#cc3266] text-white shadow-xl">
            {button.text}
          </Button>
        </Link>
      </div>
      <div className="order-2 flex w-full items-center justify-center lg:order-1 lg:w-1/3">
        <ImageHandler
          image={image.data?.attributes}
          priority
          removeWrapper
          imageClassName="object-cover"
        />
      </div>
      <p className='absolute text-8xl text-[#f4f0ee] font-semibold bottom-2 right-4 z-10' aria-hidden>facetka</p>
    </div>
  );
};

export default ContactHero;