import React from 'react';
import homeData from '@/data/home/data.json';
import Button from '@/components/ui/Button/TapeButton';
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
    cta: [cta1],
  } = tutorSectionData;

  return (
    <section className="pb-10">
      <div className="grid grid-cols-4 items-center gap-4">
        <div className="col-span-3">
          <DoodleContainer doodles={titleDoodles}>
            <Header level={2} text={title} withHighlighter />
          </DoodleContainer>
          <div>{renderContent(content)}</div>
          <div className="mt-11 flex w-full flex-col items-center gap-6">
            <DoodleContainer doodles={imageDoodles}>
              <Button href={cta1.action}>{cta1.text}</Button>
            </DoodleContainer>
          </div>
        </div>

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
    </section>
  );
};

export default Tutoring;