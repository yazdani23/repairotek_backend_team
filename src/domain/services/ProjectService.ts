import { ProjectDoc } from "../docs/Project";
import BaseService from "./BaceService";
import ProjectRepository from "../repositories/ProjectRepository";
import ProjectValidationSchema from "../validations/ProjectValidation";

class ProjectService extends BaseService<ProjectDoc> {
  constructor() {
    super(ProjectRepository, ProjectValidationSchema);
  }
}
export default new ProjectService();
