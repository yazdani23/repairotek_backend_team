
import express from "express";
import DepartmentController from "../controllers/DepartmentController";

const departmentRouter = express.Router();

departmentRouter.get("/departments/:id", DepartmentController.getById);
departmentRouter.get("/departments", DepartmentController.getAll);
departmentRouter.post("/departments", DepartmentController.create);
departmentRouter.put("/departments/:id", DepartmentController.update);
departmentRouter.delete("/departments/:id", DepartmentController.delete);

export default departmentRouter;
