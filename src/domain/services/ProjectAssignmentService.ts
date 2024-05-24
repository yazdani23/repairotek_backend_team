import { ProjectAssignmentDoc } from "../docs/ProjectAssignment";

import BaseService from "./BaseService";
import ProjectAssignmentRepository from "../repositories/ProjectAssignmentRepository";
import ProjectAssignmentValidationSchema from "../validations/ProjectAssignmentValidation";

class ProjectAssignmentService extends BaseService<ProjectAssignmentDoc> {
  constructor() {
    super(ProjectAssignmentRepository, ProjectAssignmentValidationSchema);
  }
}
export default new ProjectAssignmentService();
