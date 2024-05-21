
import { ProjectAssignmentDoc } from "../docs/ProjectAssignment";
import ProjectAssignmentModel from "../models/ProjectAssignmentModel";
import BaseRepository from "./BaseRepository";

class ProjectAssignmentRepository extends BaseRepository<ProjectAssignmentDoc> {
 constructor(){
    super(ProjectAssignmentModel)
 }
}

export default  new ProjectAssignmentRepository();
