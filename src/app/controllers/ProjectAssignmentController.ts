

import ProjectAssignmentService from "../../domain/services/ProjectAssignmentService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const ProjectAssignmentController = crudControllerGenerator("ProjectAssignment", ProjectAssignmentService);
export default ProjectAssignmentController;
