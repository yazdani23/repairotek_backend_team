

import EmployeeTimeCardService from "../../domain/services/EmployeeTimeCardService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const EmployeeTimeCardController = crudControllerGenerator("EmployeeTimeCard", EmployeeTimeCardService);
export default EmployeeTimeCardController;
