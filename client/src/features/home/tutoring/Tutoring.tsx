import React from 'react';

import homeData from '@/data/home/data.json';
import Button from '@/components/ui/Button/TapeButton';
import Text from '@/components/ui/Text';
import Header from '@/components/ui/Header';
import DoodleContainer from '@/components/ui/Doodle/DoodleContainer';
import { renderContent } from '@/utils/renderContent';
import { AnySection } from '../types';
import NextImage from '@/components/ui/Image/Image';
import { imageDoodles, titleDoodles } from './Doodles';
import { isTutorSection } from './typeguards';

const tutorSectionData = homeData.homePage.sections.find(
  (section) => section.type === 'tutoring_offer'
) as AnySection | undefined;

const Tutoring = () => {
  if (!isTutorSection(tutorSectionData)) {
    return null;
  }

  const {
    title,
    content,
    images: [image1],
  } = tutorSectionData;

  return (
    <section className="">
      {/* Pierwszy wiersz - dwie kolumny */}
      <div className="grid grid-cols-4 items-center gap-4">
        {/* Kolumna z obrazem */}
        <div className="col-span-3">
          <DoodleContainer doodles={titleDoodles}>
            <Header level={2} text={title} withHighlighter />
          </DoodleContainer>
        <Text>{renderContent(content)}</Text>

        </div>

        {/* Kolumna z tytułem */}
        <div className="col-span-1 flex items-center justify-center">
          <div className="relative">
            <DoodleContainer doodles={imageDoodles}>
              <NextImage
                {...image1}
                objectFit="contain"
                withBorder
                withShadow
              />
            </DoodleContainer>
          </div>
        </div>
      </div>

      {/* Content poniżej */}
      <div className="sm:pl-[30%]">
      </div>
    </section>
  );
};

export default Tutoring;
