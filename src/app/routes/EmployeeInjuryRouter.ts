
import express from "express";
import EmployeeInjuryController from "../controllers/EmployeeInjuryController";

const employeeInjuryRouter = express.Router();

employeeInjuryRouter.get("/employeeInjurys/:id", EmployeeInjuryController.getById);
employeeInjuryRouter.get("/employeeInjurys", EmployeeInjuryController.getAll);
employeeInjuryRouter.post("/employeeInjurys", EmployeeInjuryController.create);
employeeInjuryRouter.put("/employeeInjurys/:id", EmployeeInjuryController.update);
employeeInjuryRouter.delete("/employeeInjurys/:id", EmployeeInjuryController.delete);

export default employeeInjuryRouter;
