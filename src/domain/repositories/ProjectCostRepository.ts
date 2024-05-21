
import { ProjectCostDoc } from "../docs/ProjectCost";
import ProjectCostModel from "../models/ProjectCostModel";
import BaseRepository from "./BaseRepository";

class ProjectCostRepository extends BaseRepository<ProjectCostDoc> {
 constructor(){
    super(ProjectCostModel)
 }
}

export default  new ProjectCostRepository();
