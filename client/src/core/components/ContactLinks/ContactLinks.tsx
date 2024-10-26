import Link from 'next/link';
import { FC } from 'react';
import NextImage from 'next/image';

interface ContactLinksProps {
  title?: string;
  facebookUrl?: string;
  instaUrl?: string;
  youtubeUrl?: string;
}

const ContactLinks: FC<ContactLinksProps> = ({
  title,
  facebookUrl,
  instaUrl,
  youtubeUrl,
}) => {
  if (!title) {
    return null;
  }

  const socialLinks = [
    { url: facebookUrl, alt: 'Logo Facebook z kotem', src: '/kotfb.webp' },
    { url: instaUrl, alt: 'Logo Instagram z kotem', src: '/kotig.webp' },
    { url: youtubeUrl, alt: 'Logo YouTube z kotem', src: '/kotyt.webp' },
  ];

  return (
    <div className="mt-8 flex w-full flex-col">
      <h2 className="mb-12 text-center leading-tight max-lg:mb-5 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="flex w-full flex-row flex-wrap justify-evenly gap-4">
        {socialLinks.map(
          (link, index) =>
            link.url && (
              <Link href={link.url} key={index} className="group">
                <div className="relative overflow-hidden rounded-lg border-3 border-transparent transition-all duration-300 group-hover:border-[#cc3266]">
                  <NextImage
                    alt={link.alt}
                    src={link.src}
                    width={300}
                    height={300}
                    className="mx-auto mt-1 flex max-h-28 w-28 transition-transform duration-300 group-hover:scale-105 sm:max-h-32 sm:w-32 md:max-h-max md:w-max"
                  />
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default ContactLinks;
