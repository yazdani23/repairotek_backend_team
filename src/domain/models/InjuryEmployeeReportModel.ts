import { Schema } from "mongoose";
import { InjuryEmployeeReportDoc } from "../docs/InjuryEmployeeReport";
import ReportModel from "./ReportModel";

const InjuryEmployeeReporSchema = new Schema<InjuryEmployeeReportDoc>(
  {
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    }
  }
);

const InjuryEmployeeReportModel = ReportModel.discriminator(
  "InjuryEmployeeRepor",
  InjuryEmployeeReporSchema
);

export default InjuryEmployeeReportModel;