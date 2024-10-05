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

const ContactHero: FC<ContactHeroProps> = ({
  title,
  description,
  image,
  button,
}) => {
  if (!title || !description || !image || !button) {
    return null;
  }

  return (
    <div className="relative flex max-w-[100vw] flex-col items-center justify-evenly rounded-3xl bg-[#e8e1d8] p-8 lg:flex-row lg:p-11">
      <div className="order-1 mb-14 mt-8 flex w-full flex-col items-start max-lg:mb-5 max-lg:mt-0 max-lg:items-center lg:order-2 lg:w-1/2">
        <h1 className="mb-12 text-left leading-tight max-lg:mb-5 sm:text-2xl md:text-3xl">
          {title}
        </h1>
        <p className="mb-12 text-left text-sm max-lg:mb-5 md:text-xl">
          {description}
        </p>
        <Link href={button.url}>
          <Button size="lg" className="bg-[#cc3266] text-white shadow-xl">
            {button.text}
          </Button>
        </Link>
      </div>
      <div className="order-2 flex w-2/3 items-center justify-center lg:order-1 lg:w-1/3">
        <ImageHandler
          image={image.data?.attributes}
          priority
          removeWrapper
          imageClassName="object-contain md:object-cover max-lg:max-h-[50vh] object-top"
        />
      </div>
      <p
        className="absolute bottom-2 right-4 z-10 text-8xl font-semibold text-[#f4f0ee]"
        aria-hidden
      >
        facetka
      </p>
    </div>
  );
};

export default ContactHero;
