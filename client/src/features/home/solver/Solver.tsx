import React from 'react';

import homeData from '@/data/home/data.json';
import Button from '@/components/ui/Button/TapeButton';
import Text from '@/components/ui/Text';
import Header from '@/components/ui/Header';
import DoodleContainer from '@/components/ui/Doodle/DoodleContainer';
import { renderContent } from '@/utils/renderContent';
import { AnySection } from '../types';
import { bottomButtonDoodles } from './Doodles';
import { isSolverSection } from './typeguards';

const sectionData = homeData.homePage.sections.find(
  (section) => section.type === 'ai_solver'
) as AnySection | undefined;

const Solver = () => {
  if (!isSolverSection(sectionData)) {
    return null;
  }

  const {
    title,
    content,
    cta: [cta1],
  } = sectionData;

  return (
    <section className="relative pb-32 sm:pb-52 md:pb-20">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-16 md:items-center">
        {/* Left column - Button */}
        <div className="flex justify-center">
          <DoodleContainer doodles={bottomButtonDoodles}>
            <Button href={cta1.action} variant='large' svgVariantIndex={2}>{cta1.text}</Button>
          </DoodleContainer>
        </div>
        
        {/* Right column - Text content */}
        <div className="text-center">
          <Header level={2} text={title} withHighlighter className="mb-4" />
          <Text>{renderContent(content)}</Text>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="mb-8 text-center pl-4">
          <Header level={2} text={title} withHighlighter className="mb-4" />
          <Text className='text-right mb-6'>{renderContent(content)}</Text>
        </div>
        
        <div className="flex justify-center">
          <DoodleContainer doodles={bottomButtonDoodles}>
            <Button href={cta1.action} className='px-10'>{cta1.text}</Button>
          </DoodleContainer>
        </div>
      </div>
    </section>
  );
};

export default Solver;