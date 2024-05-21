import { Document, Schema } from "mongoose";

export interface EquipmentDamageDoc extends Document {
  equipmentId: Schema.Types.ObjectId;
  damageTypeId: Schema.Types.ObjectId;
  damageDate: string;
  damageTime: string;
  insuranceId: Schema.Types.ObjectId;
  description: string;
}
