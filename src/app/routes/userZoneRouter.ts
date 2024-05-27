import  express from "express";
import UserZoneController from "../controllers/UserZoneController";

const userZoneRouter = express.Router();

userZoneRouter.get("/userZones", UserZoneController.getAll);
userZoneRouter.get("/userZones/:id", UserZoneController.getById);
userZoneRouter.post("/userZones", UserZoneController.create);
userZoneRouter.put("/userZones/:id", UserZoneController.update);
userZoneRouter.delete("/userZones/:id", UserZoneController.delete);


export default userZoneRouter;
