import EmployeeService from "../../domain/services/EmployeeService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const EmployeeController = crudControllerGenerator("Employee", EmployeeService);
export default EmployeeController;
