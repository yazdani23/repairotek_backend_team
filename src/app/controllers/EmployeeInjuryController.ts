

import EmployeeInjuryService from "../../domain/services/EmployeeInjuryService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const EmployeeInjuryController = crudControllerGenerator("EmployeeInjury", EmployeeInjuryService);
export default EmployeeInjuryController;
