import { AnySection, HeroSectionType } from "./types";


export function isHeroSection(section: AnySection | undefined): section is HeroSectionType {
  return !!section && section.type === 'hero';
}
