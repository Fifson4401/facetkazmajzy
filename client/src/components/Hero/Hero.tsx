import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row px-11 h-[70vh]">
      <div className="flex flex-col items-start order-2 lg:order-1 lg:w-1/2 w-full lg:pe-28 pe-20 mt-8">
        <h1 className="text-3xl md:text-4xl  lg:text-5xl mb-12 leading-tight">
        Przyjazne korepetycje z matematyki w Twojej okolicy
        </h1>
        <p className=" mb-12">
          Studia matematyczne, praca w szkole podstawowej, ale to indywidualna
          praca z uczniem daje mi najwięcej radości, a uśmiech i zadowolenie
          dzieci ze zdanych egzaminów, sprawdzianów i kartkówek największej
          satysfakcji.
        </p>
        <Button color="primary" radius="full" size="lg">
          Sprawdź Możliwości Współpracy
        </Button>
      </div>

      <div className="flex items-center justify-center order-1 lg:order-2 lg:w-1/2 w-full p-4">
        <img
          src="/cat-with-glasses.png"
          alt="Cat with glasses"
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
