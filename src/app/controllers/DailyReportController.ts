
import { DailyReportDoc } from "../../domain/docs/DailyReport";
import DailyReportService from "../../domain/services/DailyReportService";
import BaseController from "./BaseController";

class DailyReportController extends BaseController<DailyReportDoc> {
  private dailyReportService = this.service as typeof DailyReportService;
  constructor() {
    super(DailyReportService);
  }
}
export default new DailyReportController();
