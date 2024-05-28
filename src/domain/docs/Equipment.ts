import { Document } from "mongoose";

export interface EquipmentDoc extends Document {
  name: string;
  equipmentModel: string;
  description: string;
  pricePerHour?: number;
  count: number;
}
