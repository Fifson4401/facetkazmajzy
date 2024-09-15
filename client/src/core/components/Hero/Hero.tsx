import { ImageProps } from "@/api/interfaces/defaults";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";
import { ImageHandler } from "../ImageHandler";

interface HeroProps {
  title: string,
  description: string,
  image: ImageProps,
  button: { text: string, url: string }
}

const Hero: FC<HeroProps> = ({ title, description, image, button }) => {

  return (
    <div className="flex flex-col lg:flex-row px-11 max-w-[100vw]">
      <div className="flex flex-col items-start order-2 lg:order-1 lg:w-1/2 w-full lg:pe-28 md:pe-20  mt-8">
        <h1 className="sm:text-2xl md:text-4xl lg:text-5xl mb-12 max-md:mb-6 leading-tight">
          {title}
        </h1>
        <p className="mb-12 md:text-xl text-sm">
          {description}
        </p>
        <Link href={button.url}>
          <Button size="lg" className="bg-[#cc3266] text-white shadow-xl">
            {button.text}
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center order-1 lg:order-2 lg:w-1/2 w-full">
        <ImageHandler image={image.data?.attributes} priority removeWrapper imageClassName="object-cover max-lg:max-h-[50vh] max-md:max-h-[40vh]" />
      </div>
    </div>
  );
};

export default Hero;
