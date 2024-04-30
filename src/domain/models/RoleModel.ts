import { RoleDoc } from "../docs/Role";
import { generateSchema } from "../../utils/generators/modelGenerator";

const RoleModel = generateSchema<RoleDoc>("Role",
  {
    name: { type: String, required: true },
    roleType: { type: String, required: true },
  },
);

export default RoleModel;
