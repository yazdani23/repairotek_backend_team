
import { InjuryEmployeeReportDoc } from "../docs/InjuryEmployeeReport";
import InjuryEmployeeReportModel from "../models/InjuryEmployeeReportModel";
import BaseRepository from "./BaseRepository";

class InjuryEmployeeReportRepository extends BaseRepository<InjuryEmployeeReportDoc> {
  constructor() {
    super(InjuryEmployeeReportModel);
  }
}

export default new InjuryEmployeeReportRepository();
