import express from "express";
import EmployeeController from "../controllers/EmployeeController";

const employeeRouter = express.Router();

employeeRouter.get("/employees", EmployeeController.getAll);
employeeRouter.get("/employees/:id", EmployeeController.getById);
employeeRouter.post("/employees", EmployeeController.create);
employeeRouter.put("/employees/:id", EmployeeController.update);
employeeRouter.delete("/employees/:id", EmployeeController.delete);

export default employeeRouter;
