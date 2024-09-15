import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const Footer = () => {
  const date = useMemo(() => new Date(), [])

  return (
    <div className="flex flex-col px-11 bg-background shadow-sm justify-center md:pt-7">
      <div className="flex flex-row items-start w-full justify-center mb-2">
        <Link href="/" color="foreground">
          <Image
            as={NextImage}
            src="/logo.png"
            alt="Facetka Z Majzy Logo"
            width={58}
            height={58}
            priority
          />
        </Link>
      </div>
      <div className="flex flex-row items-start w-full justify-center">
        <p className="mb-2 md:text-medium text-sm">
          Facetka z Majzy © {date.getFullYear()}
        </p>
      </div>
      <div className="flex flex-row items-start w-full justify-center gap-2 mb-6 md:text-medium text-sm">
        <Link href={'/'}>
          Zadania
        </Link>
        <Link href={'/'}>
          Kontakt
        </Link>
        <Link href={'/'}>
          Polityka prywatności
        </Link>
      </div>

    </div>
  );
};

export default Footer;
