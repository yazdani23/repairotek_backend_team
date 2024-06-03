import { Schema } from "mongoose";
import { ReportDoc } from "./Report";

export interface InjuryEmployeeReportDoc extends ReportDoc {
  employeeId: Schema.Types.ObjectId;
  // injuryTypeId: Schema.Types.ObjectId;
  // insuranceId?: Schema.Types.ObjectId;
}
