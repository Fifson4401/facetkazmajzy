import Footer from "@/core/components/Footer/Footer";
import Header from "@/core/components/Header/Header";
import { Button, Link, Image } from "@nextui-org/react";

export default function NotFound() {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Header />
      <main
        lang={'pl'}
        className="flex-1 flex flex-col items-center gap-6 overflow-hidden bg-background p-8 text-foreground light md:gap-10 md:px-14 md:py-8 xl:px-28"
      >
        <div className="flex flex-1 flex-col px-11 items-center justify-center content-center lg:flex-row">
          <div className="order-2 mt-8 flex w-full flex-col items-center justify-center align-middle mx-auto lg:order-1 lg:w-1/2">
            <h3 className="mb-12 leading-tight max-md:mb-6 sm:text-2xl md:text-4xl text-center">
              Ups! Niestety nie udało mi się nic znaleźć 😔
            </h3>
            <Link href={'/zadania'}>
              <Button size="lg" className="bg-[#cc3266] text-white shadow-xl">
                Wróć do strony głównej
              </Button>
            </Link>
          </div>
          <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:w-1/2 py-3">
            <Image
              alt="Błąd 404"
              src="/404.webp"
              width={300}
              height={300}
              isBlurred
              className="mx-auto mt-1 flex max-h-28 w-28 group-hover:opacity-70 sm:max-h-32 sm:w-32 md:max-h-max md:w-max"
              removeWrapper
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}