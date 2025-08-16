import { AnySection, StudentBenefitsSectionType } from "../types";


export function isBenefitSection(section: AnySection | undefined): section is StudentBenefitsSectionType {
  return !!section && section.type === 'student_benefits';
}

