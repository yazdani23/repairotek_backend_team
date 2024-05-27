
import { ReportDoc } from "../../domain/docs/Report";
import ReportService from "../../domain/services/ReportService";
import BaseController from "./BaseController";

class ReportController extends BaseController<ReportDoc> {
  private reportService = this.service as typeof ReportService;
  constructor() {
    super(ReportService);
  }
}
export default new ReportController();
