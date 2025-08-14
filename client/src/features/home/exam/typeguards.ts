import { AnySection, ExamPrepSectionType } from "../types";


export function isExamSection(section: AnySection | undefined): section is ExamPrepSectionType {
  return !!section && section.type === 'exam_prep';
}
