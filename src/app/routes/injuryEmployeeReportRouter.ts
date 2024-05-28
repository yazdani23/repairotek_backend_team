
import express from "express";
import InjuryEmployeeReportController from "../controllers/InjuryEmployeeReportController";

const injuryEmployeeReportRouter = express.Router();

injuryEmployeeReportRouter.get("/injuryEmployeeReports/:id", InjuryEmployeeReportController.getById);
injuryEmployeeReportRouter.get("/injuryEmployeeReports", InjuryEmployeeReportController.getAll);
injuryEmployeeReportRouter.post("/injuryEmployeeReports", InjuryEmployeeReportController.create);
injuryEmployeeReportRouter.put("/injuryEmployeeReports/:id", InjuryEmployeeReportController.update);
injuryEmployeeReportRouter.delete("/injuryEmployeeReports/:id", InjuryEmployeeReportController.delete);

export default injuryEmployeeReportRouter;
