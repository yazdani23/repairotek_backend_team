import { generateSchema } from "../../utils/generators/modelGenerator";
import { ResourceDoc } from "../docs/Resource";

const ResourceModel = generateSchema<ResourceDoc>("Resource", {
  name: { type: String, required: true, unique: true },
  description: { type: String },
});

export default ResourceModel;