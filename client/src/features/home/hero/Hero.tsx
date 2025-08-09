import React from 'react';

import homeData from '@/data/home/data.json';
import Button from '@/components/ui/Button/TapeButton';
import Text from '@/components/ui/Text';
import Header from '@/components/ui/Header';
import DoodleContainer, {
  Doodle,
} from '@/components/ui/DoodleContainer/DoodleContainer';
import { renderContent } from '@/utils/renderContent';
import { isHeroSection } from './typeguards';
import { AnySection } from './types';
import { bottomButtonDoodles, textDoodles, titleDoodles, topButtonDoodles } from './Doodles';

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
    <section>
      <div className="items-center text-center md:items-start md:text-left">
        <DoodleContainer doodles={titleDoodles}>
        <Header level={1} text={title} withHighlighter className="mb-4" />
        </DoodleContainer>
        <DoodleContainer doodles={textDoodles}>
          <Text>{renderContent(content)}</Text>
        </DoodleContainer>

        <div className="mt-11 flex flex-col items-start gap-6">
          <DoodleContainer doodles={topButtonDoodles}>
            <Button href={cta1.action}>{cta1.text}</Button>
          </DoodleContainer>

          <div className="flex w-full justify-end">
            <DoodleContainer doodles={bottomButtonDoodles}>
              <Button href={cta2.action}>{cta2.text}</Button>
            </DoodleContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
