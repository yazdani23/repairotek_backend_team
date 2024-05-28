
import express from "express";
import TimeCardEmployeeController from "../controllers/TimeCardEmployeeController";

const timeCardEmployeeRouter = express.Router();

timeCardEmployeeRouter.get("/timeCardEmployees/:id", TimeCardEmployeeController.getById);
timeCardEmployeeRouter.get("/timeCardEmployees", TimeCardEmployeeController.getAll);
timeCardEmployeeRouter.post("/timeCardEmployees", TimeCardEmployeeController.create);
timeCardEmployeeRouter.put("/timeCardEmployees/:id", TimeCardEmployeeController.update);
timeCardEmployeeRouter.delete("/timeCardEmployees/:id", TimeCardEmployeeController.delete);

export default timeCardEmployeeRouter;
