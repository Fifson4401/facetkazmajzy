import { ContentPart } from '@/utils/renderContent';

export interface CtaType {
  text: string;
  action: string;
}

export interface ImageType {
  src: string;
  alt: string;
  width?: number; 
  height?: number; 
}

export interface HeroSectionType {
  type: 'hero';
  title: string;
  content: ContentPart[];
  cta: CtaType[];
}

export interface AiSolverSectionType {
  type: 'ai_solver';
  title: string;
  content: ContentPart[];
  cta: CtaType[];
  images: ImageType[];
}

export interface ExamPrepSectionType {
  type: 'exam_prep';
  title: string;
  content: ContentPart[];
  cta: CtaType[];
  images: ImageType[];
}

export interface TutoringOfferSectionType {
  type: 'tutoring_offer';
  title: string;
  content: ContentPart[];
  cta: CtaType[];
  images: ImageType[];
}

export interface HowWeDoItSectionType {
  type: 'how_we_do_it';
  title: string;
  points: {
    heading: string;
    items: string[];
  }[];
  cta: CtaType[];
  images: ImageType[];
}

export interface StudentBenefitsSectionType {
  type: 'student_benefits';
  title: string;
  content: ContentPart[];
}

export interface ParentSectionType {
  type: 'parent_section';
  title: string;
  content: ContentPart[];
  images: ImageType[];
}

export type AnySection =
  | HeroSectionType
  | AiSolverSectionType
  | ExamPrepSectionType
  | TutoringOfferSectionType
  | HowWeDoItSectionType
  | StudentBenefitsSectionType
  | ParentSectionType;

export interface HomePageDataType {
  homePage: {
    sections: AnySection[];
  };
}
