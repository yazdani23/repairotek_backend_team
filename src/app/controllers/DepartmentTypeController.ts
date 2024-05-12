

import DepartmentTypeService from "../../domain/services/DepartmentTypeService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const DepartmentTypeController = crudControllerGenerator("DepartmentType", DepartmentTypeService);
export default DepartmentTypeController;
