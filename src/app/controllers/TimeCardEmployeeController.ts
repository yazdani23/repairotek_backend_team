
import { TimeCardEmployeeDoc } from "../../domain/docs/TimeCardEmployee";
import TimeCardEmployeeService from "../../domain/services/TimeCardEmployeeService";
import BaseController from "./BaseController";

class TimeCardEmployeeController extends BaseController<TimeCardEmployeeDoc> {
  private timeCardEmployeeService = this.service as typeof TimeCardEmployeeService;
  constructor() {
    super(TimeCardEmployeeService);
  }
}
export default new TimeCardEmployeeController();
