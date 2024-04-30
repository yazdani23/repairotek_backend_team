import { MaterialDoc } from "../docs/Material";
import { generateSchema } from "../../utils/generators/modelGenerator";

const MaterialModel = generateSchema<MaterialDoc>("material",
{
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default MaterialModel;
