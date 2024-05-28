import { DepartmentDoc } from "../docs/unuse/Department";
import DepartmentModel from "../models/unUse/DepartmentModel";
import BaseRepository from "./BaseRepository";

class DepartmentRepository extends BaseRepository<DepartmentDoc> {
  constructor() {
    super(DepartmentModel);
  }
}

export default new DepartmentRepository();
