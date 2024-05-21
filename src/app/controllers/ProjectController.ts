import { ProjectDoc } from "../../domain/docs/Project";
import ProjectService from "../../domain/services/ProjectService";
import BaceController from "./BaseController";

class ProjectController extends BaceController<ProjectDoc> {
  constructor() {
    super(ProjectService);
  }
}
export default new ProjectController();

// const ProjectController = crudControllerGenerator("Project", ProjectService);
// export default ProjectController;