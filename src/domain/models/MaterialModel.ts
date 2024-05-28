
import { generateSchema } from "../../utils/generators/modelGenerator";
import { MaterialDoc } from "../docs/Material";

const MaterialModel = generateSchema<MaterialDoc>("material", {
  name: { type: String, required: true },
  description: { type: String, required: true },
  pricePerUnit: { type: Number, required: false, default: 0 },
  value:{ type: Number, required: false, default: 0 }
});

export default MaterialModel;
