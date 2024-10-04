import { Button, Link } from "@nextui-org/react";
import { Image } from '@nextui-org/react';

const PostNoResults = () => {
  return (
    <div className="flex flex-col px-11 items-center justify-center lg:flex-row">
      <div className="order-2 mt-8 flex w-full flex-col items-center justify-center align-middle mx-auto lg:order-1 lg:w-1/2">
        <h3 className="mb-12 leading-tight max-md:mb-6 sm:text-2xl md:text-4xl text-center">
          Niestety nic tutaj nie ma... 😔
        </h3>
        <Link href={'/zadania'}>
          <Button size="lg" className="bg-[#cc3266] text-white shadow-xl">
            Wróć do zadań
          </Button>
        </Link>
      </div>
      <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:w-1/2 py-3">
        <Image
          alt="Pusta skrzynia"
          aria-label="Wylosuj kolejne zadanie"
          src="/empty.webp"
          width={300}
          height={300}
          isBlurred
          className="mx-auto mt-1 flex max-h-28 w-28 group-hover:opacity-70 sm:max-h-32 sm:w-32 md:max-h-max md:w-max"
          removeWrapper
        />
      </div>
    </div>
  );
};

export default PostNoResults;
