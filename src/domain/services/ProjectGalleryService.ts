import { ProjectGalleryDoc } from "../docs/ProjectGallery";
import ProjectGalleryRepository from "../repositories/ProjectGalleryRepository";
import ProjectGallerySchema from "../validations/ProjectGalleryValidation";
import BaseService from "./BaceService";

class ReportService extends BaseService<ProjectGalleryDoc> {
  constructor() {
    super(ProjectGalleryRepository, ProjectGallerySchema);
  }
}
export default new ReportService();
