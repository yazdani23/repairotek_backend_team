import { DepartmentDoc } from "../docs/Department";

import BaseService from "./BaseService";
import DepartmentRepository from "../repositories/DepartmentRepository";
import DepartmentValidationSchema from "../validations/DepartmentValidation";

class DepartmentService extends BaseService<DepartmentDoc> {
  constructor() {
    super(DepartmentRepository, DepartmentValidationSchema);
  }
}
export default new DepartmentService();
