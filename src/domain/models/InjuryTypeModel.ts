import { InjuryTypeDoc } from "../docs/InjuryType";
import { generateSchema } from "../../utils/generators/modelGenerator";

const InjuryTypeModel = generateSchema<InjuryTypeDoc>("InjuryType",
{
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default InjuryTypeModel;
