import React from 'react';
import homeData from '@/data/home/data.json';
import Header from '@/components/ui/Header';
import { renderContent } from '@/utils/renderContent';
import { AnySection } from '../types';
import { isHowWeDoItSection } from './typeguards';
import DoodleContainer from '@/components/ui/Doodle/DoodleContainer';
import Button from '@/components/ui/Button/TapeButton';
import { imageDoodles } from './Doodles';

const sectionData = homeData.homePage.sections.find(
  (section) => section.type === 'how_we_do_it'
) as AnySection | undefined;

const HowWeDoIt = () => {
  if (!isHowWeDoItSection(sectionData)) {
    return null;
  }

  const { title, content, cta: [cta1] } = sectionData;

  return (
    <section className="grid items-center gap-x-16">
      <div className="flex flex-col items-start text-left">
        <Header level={2} text={title} withHighlighter className="mb-4" />
        <div className="ml-6 sm:ml-10 md:ml-20">{renderContent(content)}</div>
        <div className="mt-11 flex w-full flex-col items-end gap-6 pr-2">
          <DoodleContainer doodles={imageDoodles}>
            <Button href={cta1.action}>{cta1.text}</Button>
          </DoodleContainer>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;