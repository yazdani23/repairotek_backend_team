import ProjectService from "../../domain/services/ProjectService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const ProjectController = crudControllerGenerator("Project", ProjectService);
export default ProjectController;

// export default  new ProjectController(ProjectSevice);

// class ProjectController extends BaceController<ProjectDoc> {
//   constructor(projectService: ProjectService) {
//     super(projectService);
//     const test = async () => {
//        const projects= await this.service.getAll();
//       console.log(projects);
//     };
//     test()
//   }
// }
// const projectService = new ProjectService(
//   new ProjectRepository(),
//   ProductValidationSchema
// );
// export default new ProjectController(projectService);
