

import JobService from "../../domain/services/JobService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const JobController = crudControllerGenerator("Job", JobService);
export default JobController;
