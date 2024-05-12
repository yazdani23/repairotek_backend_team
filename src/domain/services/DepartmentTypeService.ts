

import { DepartmentTypeDoc } from "../docs/DepartmentType";

import BaseService from "./BaceService";
import DepartmentTypeRepository from "../repositories/DepartmentTypeRepository";
import DepartmentTypeValidationSchema from "../validations/DepartmentTypeValidation";

class DepartmentTypeService extends BaseService<DepartmentTypeDoc> {
  constructor(
  ) {
    super(DepartmentTypeRepository, DepartmentTypeValidationSchema);
  }
}
export default new DepartmentTypeService();
