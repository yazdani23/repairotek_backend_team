
import { generateSchema } from "../../utils/generators/modelGenerator";
import { MaterialDoc } from "../docs/Material";

const MaterialModel = generateSchema<MaterialDoc>("material", {
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: false, default: 0 },
});

export default MaterialModel;
