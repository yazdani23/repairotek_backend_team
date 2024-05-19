

import ProjectCostService from "../../domain/services/ProjectCostService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const ProjectCostController = crudControllerGenerator("ProjectCost", ProjectCostService);
export default ProjectCostController;
