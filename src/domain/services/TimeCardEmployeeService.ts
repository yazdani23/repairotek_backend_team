
import { TimeCardEmployeeDoc } from "../docs/TimeCardEmployee";
import BaseService from "./BaseService";
import TimeCardEmployeeRepository from "../repositories/TimeCardEmployeeRepository";
import TimeCardEmployeeValidationSchema from "../validations/TimeCardEmployeeValidation";

class TimeCardEmployeeService extends BaseService<TimeCardEmployeeDoc> {
  private timeCardEmployeeRepository = this.repository as typeof TimeCardEmployeeRepository;
  constructor() {
    super(TimeCardEmployeeRepository, TimeCardEmployeeValidationSchema);
  }
}
export default new TimeCardEmployeeService();
