import { PermissionDoc } from "../docs/Permission";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

const PermissionModel = generateSchema<PermissionDoc>("Permission", {
  name: { type: String, required: true },
  description: { type: String, required: false, default: "" }, // Optional with default empty string
  resource: { type: String, required: true },
  action: { type: String, required: true },
  roleIds: [{ type: Schema.Types.ObjectId, ref: "Role", required: true }],
});

export default PermissionModel;