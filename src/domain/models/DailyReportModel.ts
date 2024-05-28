import { DailyReportDoc } from "../docs/DailyReport";
import { Schema } from "mongoose";
import ReportModel from "./ReportModel";

const DailyReportSchema = new Schema<DailyReportDoc>({});

const DailyReportModel = ReportModel.discriminator(
  "DailyReport",
  DailyReportSchema
);

export default DailyReportModel;
