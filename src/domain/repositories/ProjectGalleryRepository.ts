import { ProjectGalleryDoc } from "../docs/ProjectGallery";
import ProjectGalleryModel from "../models/ProjectGalleryModel";
import BaseRepository from "./BaseRepository";

class ProjectGalleryRepository extends BaseRepository<ProjectGalleryDoc> {
  constructor() {
    super(ProjectGalleryModel);
  }
 
}
export default new ProjectGalleryRepository();