
import { ReportSubjectDoc } from "../../domain/docs/ReportSubject";
import ReportSubjectService from "../../domain/services/ReportSubjectService";
import BaseController from "./BaseController";

class ReportSubjectController extends BaseController<ReportSubjectDoc> {
  private reportSubjectService = this.service as typeof ReportSubjectService;
  constructor() {
    super(ReportSubjectService);
  }
}
export default new ReportSubjectController();
