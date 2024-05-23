import BaceController from "./BaseController";
import ProjectGalleryService from "../../domain/services/ProjectGalleryService";
import { ProjectGalleryDoc } from "../../domain/docs/ProjectGallery";

class ProjectGalleryController extends BaceController<ProjectGalleryDoc> {
  constructor() {
    super(ProjectGalleryService);
  }

}
export default new ProjectGalleryController();

// const ProjectController = crudControllerGenerator("Project", ProjectService);
// export default ProjectController;
