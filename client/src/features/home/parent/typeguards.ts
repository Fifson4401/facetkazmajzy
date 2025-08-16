import { AnySection, ParentSectionType } from "../types";


export function isParentSection(section: AnySection | undefined): section is ParentSectionType {
  return !!section && section.type === 'parent_section';
}
