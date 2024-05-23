import { ProjectDoc } from "../docs/Project";
import BaseService from "./BaceService";
import ProjectRepository from "../repositories/ProjectRepository";
import ProjectValidationSchema from "../validations/ProjectValidation";
import logger from "../../utils/helpers/logger";
import { ProjectGalleryDoc } from "../docs/ProjectGallery";

class ProjectService extends BaseService<ProjectDoc>  {
  constructor() {
    super(ProjectRepository, ProjectValidationSchema);
  }
  async getProjectGallery(
    projectId: string
  ): Promise<ProjectGalleryDoc[] | null> {
     const projectRepository = this.repository as typeof ProjectRepository;
    const gallery = await projectRepository.getGallery(projectId);
    logger.info(gallery);
    return gallery;
  }
}
export default new ProjectService();
