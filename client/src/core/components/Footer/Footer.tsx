import { Image } from '@nextui-org/react';
import NextImage from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

const Footer = () => {
  const date = useMemo(() => new Date(), []);

  return (
    <div className="flex flex-col justify-center bg-background px-11 pt-7 shadow-sm">
      <div className="mb-2 flex w-full flex-row items-start justify-center">
        <Link href="/" color="foreground">
          <Image
            as={NextImage}
            src="/logo.webp"
            alt="Facetka Z Majzy Logo"
            width={58}
            height={58}
            priority
          />
        </Link>
      </div>
      <div className="flex w-full flex-row items-start justify-center">
        <p className="mb-2 text-sm md:text-medium">
          Facetka z Majzy © {date.getFullYear()}
        </p>
      </div>
      <div className="mb-6 flex w-full flex-row items-start justify-center gap-2 text-sm md:text-medium">
        <Link href={'/zadania'}>Zadania</Link>
        <Link href={'/kontakt'}>Kontakt</Link>
        <Link href={'/'}>Polityka prywatności</Link>
      </div>
    </div>
  );
};

export default Footer;
