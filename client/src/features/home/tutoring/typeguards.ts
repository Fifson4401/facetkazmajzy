import { AnySection, TutoringOfferSectionType } from "../types";


export function isTutorSection(section: AnySection | undefined): section is TutoringOfferSectionType {
  return !!section && section.type === 'tutoring_offer';
}
