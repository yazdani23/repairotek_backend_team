import  express from "express";
import UserZonesController from "../controllers/UserZoneController";

const userZoneRouter = express.Router();

userZoneRouter.get("/userZones", UserZonesController.getAll);
userZoneRouter.get("/userZones/:id", UserZonesController.getById);
userZoneRouter.post("/userZones", UserZonesController.create);
userZoneRouter.put("/userZones/:id", UserZonesController.update);
userZoneRouter.delete("/userZones/:id", UserZonesController.delete);


export default userZoneRouter;
