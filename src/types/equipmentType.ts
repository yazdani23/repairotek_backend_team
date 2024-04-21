import { Document } from "mongoose";

export interface EquipmentTypeDoc extends Document {
  name: string;
  equipmentModel: string;
  description: string;
}
