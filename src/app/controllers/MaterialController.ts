

import MaterialService from "../../domain/services/MaterialService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const MaterialController = crudControllerGenerator("Material", MaterialService);
export default MaterialController;
