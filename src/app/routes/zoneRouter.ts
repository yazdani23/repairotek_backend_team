import  express from "express";
import ZonesController from "../controllers/ZoneController";

const zoneRouter = express.Router();

zoneRouter.get("/zones", ZonesController.getAll);
zoneRouter.get("/zones/:id", ZonesController.getById);
zoneRouter.post("/zones", ZonesController.create);
zoneRouter.put("/zones/:id", ZonesController.update);
zoneRouter.delete("/zones/:id", ZonesController.delete);


export default zoneRouter;
