
import express from "express";
import TaskController from "../controllers/TaskController";

const taskRouter = express.Router();

taskRouter.get("/tasks/:id", TaskController.getById);
taskRouter.get("/tasks", TaskController.getAll);
taskRouter.post("/tasks", TaskController.create);
taskRouter.put("/tasks/:id", TaskController.update);
taskRouter.delete("/tasks/:id", TaskController.delete);

export default taskRouter;
