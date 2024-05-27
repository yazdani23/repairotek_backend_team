
import { ProjectAssignmentDoc } from "../../domain/docs/ProjectAssignment";
import ProjectAssignmentService from "../../domain/services/ProjectAssignmentService";
import BaseController from "./BaseController";

class ProjectAssignmentController extends BaseController<ProjectAssignmentDoc> {
  private projectAssignmentService = this.service as typeof ProjectAssignmentService;
  constructor() {
    super(ProjectAssignmentService);
  }
}
export default new ProjectAssignmentController();
