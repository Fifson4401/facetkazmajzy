import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { FC } from 'react';

interface ContactLinksProps {
  title?: string;
  facebookUrl?: string;
  instaUrl?: string;
  youtubeUrl?: string;
}

const ContactLinks: FC<ContactLinksProps> = ({ title, facebookUrl, instaUrl, youtubeUrl }) => {

  if (!title) {
    return null;
  }

  const socialLinks = [
    { url: facebookUrl, alt: "Logo Facebook z kotem", src: "/kotfb.webp" },
    { url: instaUrl, alt: "Logo Instagram z kotem", src: "/kotig.webp" },
    { url: youtubeUrl, alt: "Logo YouTube z kotem", src: "/kotyt.webp" },
  ];

  return (
    <div className="mt-8 flex w-full flex-col">
      <h2 className="mb-12 leading-tight max-lg:mb-5 sm:text-3xl md:text-4xl text-center">
        {title}
      </h2>
      <div className="flex flex-row justify-evenly w-full flex-wrap gap-4">
        {socialLinks.map((link, index) => (
          link.url && (
            <Link href={link.url} key={index} className="group">
              <div className="relative rounded-lg overflow-hidden border-3 border-transparent transition-all duration-300 group-hover:border-[#cc3266]">
                <Image
                  alt={link.alt}
                  src={link.src}
                  width={300}
                  height={300}
                  isBlurred
                  className="mx-auto mt-1 flex max-h-28 w-28 sm:max-h-32 sm:w-32 md:max-h-max md:w-max transition-transform duration-300 group-hover:scale-105"
                  removeWrapper
                />
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default ContactLinks;