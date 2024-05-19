

import { ReportDoc } from "../docs/Report";

import BaseService from "./BaceService";
import ReportRepository from "../repositories/ReportRepository";
import ReportValidationSchema from "../validations/ReportValidation";

class ReportService extends BaseService<ReportDoc> {
  constructor(
  ) {
    super(ReportRepository, ReportValidationSchema);
  }
}
export default new ReportService();
