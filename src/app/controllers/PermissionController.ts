

import PermissionService from "../../domain/services/PermissionService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const PermissionController = crudControllerGenerator("Permission", PermissionService);
export default PermissionController;
