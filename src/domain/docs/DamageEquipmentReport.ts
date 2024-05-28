import { Schema } from "mongoose";
import { ReportDoc } from "./Report";

export interface DamageEquipmentReportDoc extends ReportDoc {
  equipmentId: Schema.Types.ObjectId;
  // damageTypeId?: Schema.Types.ObjectId;
  // insuranceId?: Schema.Types.ObjectId;
}
