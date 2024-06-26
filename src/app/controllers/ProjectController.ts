import { Request, Response } from "express";
import { ProjectDoc } from "../../domain/docs/Project";
import ProjectService from "../../domain/services/ProjectService";
import BaseController from "./BaseController";

class ProjectController extends BaseController<ProjectDoc> {
  private projectService = this.service as typeof ProjectService;
  constructor() {
    super(ProjectService);
  }

  getProjectGallery = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const projectId = req.params.id;
    const projectGallery = await this.projectService.getProjectGallery(
      projectId
    );
    if (!projectGallery) {
      throw Error(`Project not found with id: ${projectId}`);
    }
    return res.json(projectGallery);
  };
}
export default new ProjectController();

// const ProjectController = crudControllerGenerator("Project", ProjectService);
// export default ProjectController;
