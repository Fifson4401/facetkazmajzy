import { AnySection, HowWeDoItSectionType } from "../types";


export function isHowWeDoItSection(section: AnySection | undefined): section is HowWeDoItSectionType {
  return !!section && section.type === 'how_we_do_it';
}

