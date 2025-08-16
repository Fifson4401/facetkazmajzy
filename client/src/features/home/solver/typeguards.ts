import { AnySection, ExamPrepSectionType } from "../types";


export function isSolverSection(section: AnySection | undefined): section is ExamPrepSectionType {
  return !!section && section.type === 'ai_solver';
}
