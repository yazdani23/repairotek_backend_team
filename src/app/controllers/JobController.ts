
import { JobDoc } from "../../domain/docs/Job";
import JobService from "../../domain/services/JobService";
import BaseController from "./BaseController";

class JobController extends BaseController<JobDoc> {
  private jobService = this.service as typeof JobService;
  constructor() {
    super(JobService);
  }
}
export default new JobController();
