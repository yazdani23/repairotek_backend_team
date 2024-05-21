

import InsuranceService from "../../domain/services/InsuranceService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const InsuranceController = crudControllerGenerator("Insurance", InsuranceService);
export default InsuranceController;
