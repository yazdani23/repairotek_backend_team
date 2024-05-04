import RoleService from "../../domain/services/RoleService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const RoleController = crudControllerGenerator("Role", RoleService);
export default RoleController;
