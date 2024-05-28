import { EmployeeInjuryDoc } from "../docs/InjuryEmployeeReport";

import BaseService from "./BaseService";
import EmployeeInjuryRepository from "../repositories/EmployeeInjuryRepository";
import EmployeeInjuryValidationSchema from "../validations/EmployeeInjuryValidation";

class EmployeeInjuryService extends BaseService<EmployeeInjuryDoc> {
  constructor() {
    super(EmployeeInjuryRepository, EmployeeInjuryValidationSchema);
  }
}
export default new EmployeeInjuryService();
