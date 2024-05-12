
import { DepartmentTypeDoc } from "../docs/DepartmentType";
import DepartmentTypeModel from "../models/DepartmentTypeModel";
import BaseRepository from "./BaseRepository";

class DepartmentTypeRepository extends BaseRepository<DepartmentTypeDoc> {
 constructor(){
    super(DepartmentTypeModel)
 }
}

export default  new DepartmentTypeRepository();
