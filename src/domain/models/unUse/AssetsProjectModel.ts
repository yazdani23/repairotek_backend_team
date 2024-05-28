import { AssetsProjectDoc } from "../../docs/unuse/AssetsProject";
import { generateSchema } from "../../../utils/generators/modelGenerator";

const AssetsProjectModel = generateSchema<AssetsProjectDoc>(
  "AssetsProject",
  {}
);

export default AssetsProjectModel;
