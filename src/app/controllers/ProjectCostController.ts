
import { ProjectCostDoc } from "../../domain/docs/ProjectCost";
import ProjectCostService from "../../domain/services/ProjectCostService";
import BaseController from "./BaseController";

class ProjectCostController extends BaseController<ProjectCostDoc> {
  private projectCostService = this.service as typeof ProjectCostService;
  constructor() {
    super(ProjectCostService);
  }
}
export default new ProjectCostController();
