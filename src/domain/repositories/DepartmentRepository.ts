
import { DepartmentDoc } from "../docs/Department";
import DepartmentModel from "../models/DepartmentModel";
import BaseRepository from "./BaseRepository";

class DepartmentRepository extends BaseRepository<DepartmentDoc> {
 constructor(){
    super(DepartmentModel)
 }
}

export default  new DepartmentRepository();
