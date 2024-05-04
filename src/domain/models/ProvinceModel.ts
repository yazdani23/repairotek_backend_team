import { ProvinceDoc } from "../docs/Province";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ProvinceModel = generateSchema<ProvinceDoc>("Province",
  {
    code: { type: Number, required: true },
    name: { type: String, required: true },
  },
);

export default ProvinceModel;
