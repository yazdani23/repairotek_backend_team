import { Schema } from "mongoose";
import { EquipmentEmployeeDoc } from "../../docs/unuse/EquipmentEmployee";
import { generateSchema } from "../../../utils/generators/modelGenerator";

const EquipmentEmployeeModel = generateSchema<EquipmentEmployeeDoc>(
  "Equipment",
  {
    equipmentTypeId: {
      type: Schema.Types.ObjectId,
      ref: "EquipmentType",
      required: true,
    },
    allocatedHours: { type: Number, required: true },
    description: { type: String, required: true },
  }
);

export default EquipmentEmployeeModel;
