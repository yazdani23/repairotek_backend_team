import { Schema } from "mongoose";
import ReportModel from "./ReportModel";
import { DamageEquipmentReportDoc } from "../docs/DamageEquipmentReport";

const DamageEquipmentReportSchema = new Schema<DamageEquipmentReportDoc>({
  equipmentId: {
    type: Schema.Types.ObjectId,
    ref: "Equipment",
    required: true,
  }
});

const DamageEquipmentReportModel = ReportModel.discriminator(
  "DamageEquipmentReport",
  DamageEquipmentReportSchema
);

export default DamageEquipmentReportModel;
