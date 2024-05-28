
import { InjuryEmployeeReportDoc } from "../../domain/docs/InjuryEmployeeReport";
import InjuryEmployeeReportService from "../../domain/services/InjuryEmployeeReportService";
import BaseController from "./BaseController";

class InjuryEmployeeReportController extends BaseController<InjuryEmployeeReportDoc> {
  private injuryEmployeeReportService = this.service as typeof InjuryEmployeeReportService;
  constructor() {
    super(InjuryEmployeeReportService);
  }
}
export default new InjuryEmployeeReportController();
