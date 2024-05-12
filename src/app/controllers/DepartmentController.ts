

import DepartmentService from "../../domain/services/DepartmentService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const DepartmentController = crudControllerGenerator("Department", DepartmentService);
export default DepartmentController;
