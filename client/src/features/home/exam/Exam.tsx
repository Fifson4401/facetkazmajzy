import React from 'react';

import homeData from '@/data/home/data.json';
import Button from '@/components/ui/Button/TapeButton';
import Text from '@/components/ui/Text';
import Header from '@/components/ui/Header';
import DoodleContainer from '@/components/ui/Doodle/DoodleContainer';
import { renderContent } from '@/utils/renderContent';
import { isExamSection } from './typeguards';
import { AnySection } from '../types';
import NextImage from '@/components/ui/Image/Image';
import { bottomButtonDoodles, imageDoodles, titleDoodles } from './Doodles';

const examSectionData = homeData.homePage.sections.find(
  (section) => section.type === 'exam_prep'
) as AnySection | undefined;

const Exam = () => {
  if (!isExamSection(examSectionData)) {
    return null;
  }

  const {
    title,
    content,
    cta: [cta1],
    images: [image1],
  } = examSectionData;

  return (
    <section className="relative grid grid-cols-3 gap-x-4 pb-20 md:pb-32 lg:pb-44 xl:pb-56 pt-14 md:grid-cols-3 md:gap-x-16 lg:pt-32">
      <div className="col-span-2 flex flex-col items-center md:col-span-2 md:items-start md:text-left">
        <DoodleContainer doodles={titleDoodles}>
          <Header level={2} text={title} withHighlighter className="mb-4" />
        </DoodleContainer>
        <Text>{renderContent(content)}</Text>
        <div className="mt-11 flex w-full flex-col items-start gap-6">
          <DoodleContainer doodles={bottomButtonDoodles}>
            <Button href={cta1.action}>{cta1.text}</Button>
          </DoodleContainer>
        </div>
      </div>
      <div className="col-span-1 flex md:col-span-1">
        <div className="relative h-64 w-full rounded-lg">
          <div className="absolute -right-8 top-5 w-full min-w-[8rem] rotate-[-4deg]">
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

export default Exam;
