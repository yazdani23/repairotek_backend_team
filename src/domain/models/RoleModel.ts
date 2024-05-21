import { RoleDoc } from "../docs/Role";
import { generateSchema } from "../../utils/generators/modelGenerator";

const RoleModel = generateSchema<RoleDoc>("Role", {
  name: { type: String, required: true },
  description: { type: String, required: false, default: "" }, // Optional with default empty string
  isActive: {type: Boolean,default: true}
  // permissions: { type: [String], required: true, default: [] },
});

export default RoleModel;