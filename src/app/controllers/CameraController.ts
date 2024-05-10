

import CameraService from "../../domain/services/CameraService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const CameraController = crudControllerGenerator("Camera", CameraService);
export default CameraController;
