import { ContentPart } from '@/utils/renderContent';

export interface HeroSectionType {
  type: 'hero';
  title: string;
  content: ContentPart[];
  cta: {
    text: string;
    action: string;
  }[];
}

export interface AiSolverSectionType {
  type: 'ai_solver';
  title: string;
  content: ContentPart[];
  
}


export type AnySection = HeroSectionType | AiSolverSectionType; 