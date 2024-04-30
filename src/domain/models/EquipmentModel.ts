import { EquipmentTypeDoc } from "../docs/EquipmentType";
import { generateSchema } from "../../utils/generators/modelGenerator";

const EquipmentModel = generateSchema<EquipmentTypeDoc>("Equipment",
{
  name: { type: String, required: true },
  equipmentModel: { type: String, required: true },
  description: { type: String, required: true },
});

export default EquipmentModel;
