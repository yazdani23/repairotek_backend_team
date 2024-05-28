import { CameraDoc } from "../../docs/unuse/Camera";
import { generateSchema } from "../../../utils/generators/modelGenerator";

const CameraModel = generateSchema<CameraDoc>("Camera", {
  modelName: { type: String, required: true },
  cameraIp: { type: String, required: true },
  cameraSpecification: { type: String },
});

export default CameraModel;
