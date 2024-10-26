'use client';

import React, { FC } from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { ContactPetItemAttribute } from '@/api/interfaces/contact';
import { ImageHandler } from '../ImageHandler';

interface ContactPetsGridProps {
  title?: string;
  petItems?: ContactPetItemAttribute[];
}

const ContactPetsSlider: FC<ContactPetsGridProps> = ({ petItems, title }) => {
  if (!petItems || petItems.length === 0) {
    return <p className="text-center">No items to display</p>;
  }

  return (
    <div className="mx-auto w-full max-w-5xl p-4">
      {title && (
        <h2 className="text-md mb-6 text-center md:text-2xl">{title}</h2>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {petItems.map((item, index) => (
          <Card
            key={index}
            className="shadow-md transition-shadow duration-300 hover:shadow-lg"
          >
            <CardBody className="bg-[#cc3266] p-0">
              <ImageHandler
                image={item.image.data?.attributes}
                priority
                removeWrapper
                imageClassName="object-cover max-h-64 md:h-fit w-full"
              />
            </CardBody>
            <CardFooter className="flex items-center bg-[#cc3266]">
              <p className="w-full text-center text-white">{item.text}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactPetsSlider;
