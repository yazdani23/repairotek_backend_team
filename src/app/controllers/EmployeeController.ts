
import { EmployeeDoc } from "../../domain/docs/Employee";
import EmployeeService from "../../domain/services/EmployeeService";
import BaseController from "./BaseController";

class EmployeeController extends BaseController<EmployeeDoc> {
  private employeeService = this.service as typeof EmployeeService;
  constructor() {
    super(EmployeeService);
  }
}
export default new EmployeeController();
