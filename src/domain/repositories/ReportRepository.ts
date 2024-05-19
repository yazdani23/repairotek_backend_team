
import { ReportDoc } from "../docs/Report";
import ReportModel from "../models/ReportModel";
import BaseRepository from "./BaseRepository";

class ReportRepository extends BaseRepository<ReportDoc> {
 constructor(){
    super(ReportModel)
 }
}

export default  new ReportRepository();
