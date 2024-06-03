
import { InjuryEmployeeReportDoc } from "../docs/InjuryEmployeeReport";
import BaseService from "./BaseService";
import InjuryEmployeeReportRepository from "../repositories/InjuryEmployeeReportRepository";
import InjuryEmployeeReportValidationSchema from "../validations/InjuryEmployeeReportValidation";

class InjuryEmployeeReportService extends BaseService<InjuryEmployeeReportDoc> {
  private injuryEmployeeReportRepository = this.repository as typeof InjuryEmployeeReportRepository;
  constructor() {
    super(InjuryEmployeeReportRepository, InjuryEmployeeReportValidationSchema);
  }
}
export default new InjuryEmployeeReportService();
