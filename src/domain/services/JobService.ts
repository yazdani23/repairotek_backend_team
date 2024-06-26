import { JobDoc } from "../docs/Job";

import BaseService from "./BaseService";
import JobRepository from "../repositories/JobRepository";
import JobValidationSchema from "../validations/JobValidation";

class JobService extends BaseService<JobDoc> {
  constructor() {
    super(JobRepository, JobValidationSchema);
  }
}
export default new JobService();
