import { Document, Schema } from "mongoose";

export interface EquipmentDoc extends Document {
  employeeId: Schema.Types.ObjectId;
  equipmentTypeId: Schema.Types.ObjectId;
  allocatedHours: Number;
  description: string;
}
