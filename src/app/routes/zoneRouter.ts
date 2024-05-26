import  express from "express";
import ZoneController from "../controllers/ZoneController";

const zoneRouter = express.Router();

zoneRouter.get("/zones", ZoneController.getAll);
zoneRouter.get("/zones/:id", ZoneController.getById);
zoneRouter.post("/zones", ZoneController.create);
zoneRouter.put("/zones/:id", ZoneController.update);
zoneRouter.delete("/zones/:id", ZoneController.delete);


export default zoneRouter;
