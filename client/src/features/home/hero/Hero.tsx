import React from 'react';

import homeData from '@/data/home/data.json';
import Button from '@/components/ui/Button/TapeButton';
import Text from '@/components/ui/Text';
import Header from '@/components/ui/Header';
import DoodleContainer from '@/components/ui/Doodle/DoodleContainer';
import { renderContent } from '@/utils/renderContent';
import { isHeroSection } from './typeguards';
import { AnySection } from './types';
import { bottomButtonDoodles, topButtonDoodles } from './Doodles';

const heroSectionData = homeData.homePage.sections.find(
  (section) => section.type === 'hero'
) as AnySection | undefined;

const Hero = () => {
  if (!isHeroSection(heroSectionData)) {
    return null;
  }

  const {
    title,
    content,
    cta: [cta1, cta2],
  } = heroSectionData;

  return (
    <section className="grid grid-cols-1 items-center gap-x-16 md:grid-cols-2">
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Header level={1} text={title} withHighlighter className="mb-4" />

          <Text>{renderContent(content)}</Text>

        <div className="mt-11 flex w-full flex-col items-start gap-6">
          <DoodleContainer doodles={topButtonDoodles}>
            <Button href={cta1.action}>{cta1.text}</Button>
          </DoodleContainer>

          <div className="flex w-full justify-end pr-6 md:pr-0">
            <DoodleContainer doodles={bottomButtonDoodles}>
              <Button href={cta2.action}>{cta2.text}</Button>
            </DoodleContainer>
          </div>
        </div>
      </div>

      <div className="hidden items-center justify-center md:flex">
        <div className="h-64 w-full rounded-lg bg-gray-200/50 p-4 text-center">
          <p className="text-gray-500">Miejsce na element wizualny</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
