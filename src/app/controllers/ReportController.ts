

import ReportService from "../../domain/services/ReportService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const ReportController = crudControllerGenerator("Report", ReportService);
export default ReportController;
