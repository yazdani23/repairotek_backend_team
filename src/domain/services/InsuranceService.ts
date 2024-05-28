import { InsuranceDoc } from "../docs/unuse/Insurance";

import BaseService from "./BaseService";
import InsuranceRepository from "../repositories/InsuranceRepository";
import InsuranceValidationSchema from "../validations/InsuranceValidation";

class InsuranceService extends BaseService<InsuranceDoc> {
  constructor() {
    super(InsuranceRepository, InsuranceValidationSchema);
  }
}
export default new InsuranceService();
