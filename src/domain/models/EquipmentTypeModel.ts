import { EquipmentTypeDoc } from "../docs/EquipmentType";
import { generateSchema } from "../../utils/generators/modelGenerator";

const EquipmentTypeModel = generateSchema<EquipmentTypeDoc>("EquipmentType",
{
  name: { type: String, required: true },
  equipmentModel: { type: String, required: true },
  description: { type: String, required: true },
});

export default EquipmentTypeModel;
