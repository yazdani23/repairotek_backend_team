import { Schema } from "mongoose";
import { EquipmentDoc } from "../docs/Equipment";
import { generateSchema } from "../../utils/generators/modelGenerator";


const EquipmentModel = generateSchema<EquipmentDoc>("Equipment",
{
  employeeId: { type: Schema.Types.ObjectId,ref:"Employee", required: true },
  equipmentTypeId: { type: Schema.Types.ObjectId,ref:"EquipmentType", required: true },
  allocatedHours: { type: Number, required: true },
  description: { type: String, required: true },
});

export default EquipmentModel;