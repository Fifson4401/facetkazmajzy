import React from 'react';

import homeData from '@/data/home/data.json';
import Button from '@/components/ui/Button/TapeButton';
import Text from '@/components/ui/Text';
import Header from '@/components/ui/Header';
import DoodleContainer from '@/components/ui/Doodle/DoodleContainer';
import { renderContent } from '@/utils/renderContent';
import { AnySection } from '../types';
import NextImage from '@/components/ui/Image/Image';
import { bottomButtonDoodles, imageDoodles, titleDoodles } from './Doodles';
import { isParentSection } from './typeguards';

const parentSectionData = homeData.homePage.sections.find(
  (section) => section.type === 'parent_section'
) as AnySection | undefined;

const Parent = () => {
  if (!isParentSection(parentSectionData)) {
    return null;
  }

  const {
    title,
    content,
    images: [image1],
  } = parentSectionData;

  return (
    <section className="">
      {/* Pierwszy wiersz - dwie kolumny */}
      <div className="grid grid-cols-4 items-center gap-4">
        {/* Kolumna z obrazem */}
        <div className="col-span-1">
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

        {/* Kolumna z tytułem */}
        <div className="flex col-span-3 items-center justify-center">
          <DoodleContainer doodles={titleDoodles}>
            <Header level={2} text={title} withHighlighter />
          </DoodleContainer>
        </div>
      </div>

      {/* Content poniżej */}
      <div className="sm:pl-[30%]">
        <Text>{renderContent(content)}</Text>
      </div>
    </section>
  );
};

export default Parent;
