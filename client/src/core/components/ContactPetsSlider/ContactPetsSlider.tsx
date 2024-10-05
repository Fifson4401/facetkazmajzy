'use client';

import React, { FC } from 'react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { ContactPetItemAttribute } from '@/api/interfaces/contact';
import { ImageHandler } from '../ImageHandler';

interface ContactPetsGridProps {
  title?: string;
  petItems?: ContactPetItemAttribute[];
}

const ContactPetsSlider: FC<ContactPetsGridProps> = ({ petItems, title }) => {
  console.log(petItems);


  if (!petItems || petItems.length === 0) {
    return <p className="text-center">No items to display</p>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {title && (
        <h2 className="text-center mb-6 text-xl md:text-2xl">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {petItems.map((item, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardBody className="p-0 bg-[#cc3266]">
              <ImageHandler
                image={item.image.data?.attributes}
                priority
                removeWrapper
                imageClassName="object-cover h-48 w-full"
              />
            </CardBody>
            <CardFooter className="bg-[#cc3266] items-center flex">
              <p className="text-white w-full text-center">{item.text}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactPetsSlider;
