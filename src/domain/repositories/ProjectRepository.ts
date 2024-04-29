import { ProjectDoc } from "../docs/Project";
import ProjectModel from "../models/ProjectModel";
import BaseRepository from "./BaseRepository";

class ProjectRepository extends BaseRepository<ProjectDoc> {
  constructor() {
    super(ProjectModel);
  }
}

export default new ProjectRepository();
