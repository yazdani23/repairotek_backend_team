
import express from "express";
import ProjectCostController from "../controllers/ProjectCostController";

const projectCostRouter = express.Router();

projectCostRouter.get("/projectCosts/:id", ProjectCostController.getById);
projectCostRouter.get("/projectCosts", ProjectCostController.getAll);
projectCostRouter.post("/projectCosts", ProjectCostController.create);
projectCostRouter.put("/projectCosts/:id", ProjectCostController.update);
projectCostRouter.delete("/projectCosts/:id", ProjectCostController.delete);

export default projectCostRouter;
