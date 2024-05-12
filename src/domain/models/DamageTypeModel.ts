import { DamageTypeDoc } from "../docs/DamageType";
import { generateSchema } from "../../utils/generators/modelGenerator";

const DamageTypeModel = generateSchema<DamageTypeDoc>("DamageType",
{
  title: { type: String, required: true },
  description: { type: String, required: true },
});
export default DamageTypeModel;
