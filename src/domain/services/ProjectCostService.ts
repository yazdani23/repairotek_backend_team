

import { ProjectCostDoc } from "../docs/ProjectCost";

import BaseService from "./BaceService";
import ProjectCostRepository from "../repositories/ProjectCostRepository";
import ProjectCostValidationSchema from "../validations/ProjectCostValidation";

class ProjectCostService extends BaseService<ProjectCostDoc> {
  constructor(
  ) {
    super(ProjectCostRepository, ProjectCostValidationSchema);
  }
}
export default new ProjectCostService();
