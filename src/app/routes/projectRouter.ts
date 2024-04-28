import  express from "express";
import ProjectsController from "../controllers/ProjectController";
const projectRouter = express.Router();

projectRouter.get("/projects", ProjectsController.getAll);
projectRouter.get("/projects/:id", ProjectsController.getById);
projectRouter.post("/projects", ProjectsController.create);
projectRouter.put("/projects/:id", ProjectsController.update);
projectRouter.delete("/projects/:id", ProjectsController.delete);



export default projectRouter;
