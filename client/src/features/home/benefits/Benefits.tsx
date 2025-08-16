import React from 'react';

import homeData from '@/data/home/data.json';
import Header from '@/components/ui/Header';
import { renderContent } from '@/utils/renderContent';
import { AnySection } from '../types';
import { isBenefitSection } from './typeguards';

const benefitSectionData = homeData.homePage.sections.find(
  (section) => section.type === 'student_benefits'
) as AnySection | undefined;

const Benefits = () => {
  if (!isBenefitSection(benefitSectionData)) {
    return null;
  }

  const { title, content } = benefitSectionData;

  return (
    <section className="grid items-center gap-x-16 pb-20">
      <div className="flex flex-col items-start text-left">
        <Header level={2} text={title} withHighlighter className="mb-4" />
        <div className="ml-6 sm:ml-10 md:ml-20">
          {renderContent(content)}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
