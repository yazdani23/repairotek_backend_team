import { InsuranceDoc } from "../docs/unuse/Insurance";
import InsuranceModel from "../models/unUse/InsuranceModel";
import BaseRepository from "./BaseRepository";

class InsuranceRepository extends BaseRepository<InsuranceDoc> {
  constructor() {
    super(InsuranceModel);
  }
}

export default new InsuranceRepository();
