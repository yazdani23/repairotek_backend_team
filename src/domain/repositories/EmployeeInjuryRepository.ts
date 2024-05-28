import { EmployeeInjuryDoc } from "../docs/InjuryEmployeeReport";
import EmployeeInjuryModel from "../models/InjuryEmployeeReportModel";
import BaseRepository from "./BaseRepository";

class EmployeeInjuryRepository extends BaseRepository<EmployeeInjuryDoc> {
  constructor() {
    super(EmployeeInjuryModel);
  }
}

export default new EmployeeInjuryRepository();
