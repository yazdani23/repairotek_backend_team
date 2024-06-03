
import { ReportSubjectDoc } from "../docs/ReportSubject";
import ReportSubjectModel from "../models/ReportSubjectModel";
import BaseRepository from "./BaseRepository";

class ReportSubjectRepository extends BaseRepository<ReportSubjectDoc> {
  constructor(){
    super(ReportSubjectModel)
  }
}

export default new ReportSubjectRepository();
