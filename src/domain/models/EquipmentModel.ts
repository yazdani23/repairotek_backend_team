import { generateSchema } from "../../utils/generators/modelGenerator";
import { EquipmentDoc } from "../docs/Equipment";

const EquipmentModel = generateSchema<EquipmentDoc>("EquipmentType", {
  name: { type: String, required: true },
  equipmentModel: { type: String, required: true },
  description: { type: String, required: true },
  pricePerHour: { type: Number, required: false },
});

export default EquipmentModel;
