
import express from "express";
import DailyReportController from "../controllers/DailyReportController";

const dailyReportRouter = express.Router();

dailyReportRouter.get("/dailyReports/:id", DailyReportController.getById);
dailyReportRouter.get("/dailyReports", DailyReportController.getAll);
dailyReportRouter.post("/dailyReports", DailyReportController.create);
dailyReportRouter.put("/dailyReports/:id", DailyReportController.update);
dailyReportRouter.delete("/dailyReports/:id", DailyReportController.delete);

export default dailyReportRouter;
