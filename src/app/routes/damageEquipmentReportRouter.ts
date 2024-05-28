
import express from "express";
import DamageEquipmentReportController from "../controllers/DamageEquipmentReportController";

const damageEquipmentReportRouter = express.Router();

damageEquipmentReportRouter.get("/damageEquipmentReports/:id", DamageEquipmentReportController.getById);
damageEquipmentReportRouter.get("/damageEquipmentReports", DamageEquipmentReportController.getAll);
damageEquipmentReportRouter.post("/damageEquipmentReports", DamageEquipmentReportController.create);
damageEquipmentReportRouter.put("/damageEquipmentReports/:id", DamageEquipmentReportController.update);
damageEquipmentReportRouter.delete("/damageEquipmentReports/:id", DamageEquipmentReportController.delete);

export default damageEquipmentReportRouter;
