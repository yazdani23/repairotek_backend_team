import { EmployeeDoc } from "../docs/Employee";

import BaseService from "./BaceService";
import EmployeeRepository from "../repositories/EmployeeRepository";
import EmployeeValidationSchema from "../validations/EmployeeValidation";

class EmployeeService extends BaseService<EmployeeDoc> {
  constructor() {
    super(EmployeeRepository, EmployeeValidationSchema);
  }
}
export default new EmployeeService();
