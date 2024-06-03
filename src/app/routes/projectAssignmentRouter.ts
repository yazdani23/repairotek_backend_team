
import express from "express";
import ProjectAssignmentController from "../controllers/ProjectAssignmentController";

const projectAssignmentRouter = express.Router();

projectAssignmentRouter.get("/projectAssignments/:id", ProjectAssignmentController.getById);
projectAssignmentRouter.get("/projectAssignments", ProjectAssignmentController.getAll);
projectAssignmentRouter.post("/projectAssignments", ProjectAssignmentController.create);
projectAssignmentRouter.put("/projectAssignments/:id", ProjectAssignmentController.update);
projectAssignmentRouter.delete("/projectAssignments/:id", ProjectAssignmentController.delete);

export default projectAssignmentRouter;
