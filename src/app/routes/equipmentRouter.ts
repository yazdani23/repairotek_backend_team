import  express from "express";
import EquipmentController from "../controllers/EquipmentController";

const equipmentRouter = express.Router();

equipmentRouter.get("/equipments", EquipmentController.getAll);
equipmentRouter.get("/equipments/:id", EquipmentController.getById);
equipmentRouter.post("/equipments", EquipmentController.create);
equipmentRouter.put("/equipments/:id", EquipmentController.update);
equipmentRouter.delete("/equipments/:id", EquipmentController.delete);


export default equipmentRouter;
