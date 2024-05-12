import  express from "express";
import EquipmentsController from "../controllers/EquipmentController";

const equipmentRouter = express.Router();

equipmentRouter.get("/equipments", EquipmentsController.getAll);
equipmentRouter.get("/equipments/:id", EquipmentsController.getById);
equipmentRouter.post("/equipments", EquipmentsController.create);
equipmentRouter.put("/equipments/:id", EquipmentsController.update);
equipmentRouter.delete("/equipments/:id", EquipmentsController.delete);


export default equipmentRouter;
