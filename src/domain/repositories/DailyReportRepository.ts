
import { DailyReportDoc } from "../docs/DailyReport";
import DailyReportModel from "../models/DailyReportModel";
import BaseRepository from "./BaseRepository";

class DailyReportRepository extends BaseRepository<DailyReportDoc> {
  constructor(){
    super(DailyReportModel)
  }
}

export default new DailyReportRepository();
