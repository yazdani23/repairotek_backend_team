import express from "express";
import EmployeesController from "../controllers/EmployeeController";
const employeeRouter = express.Router();

employeeRouter.get("/employees", EmployeesController.getAll);
employeeRouter.get("/employees/:id", EmployeesController.getById);
employeeRouter.post("/employees", EmployeesController.create);
employeeRouter.put("/employees/:id", EmployeesController.update);
employeeRouter.delete("/employees/:id", EmployeesController.delete);

export default employeeRouter;
