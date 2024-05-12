import  express from "express";
import CamerasController from "../controllers/CameraController";

const cameraRouter = express.Router();

cameraRouter.get("/cameras", CamerasController.getAll);
cameraRouter.get("/cameras/:id", CamerasController.getById);
cameraRouter.post("/cameras", CamerasController.create);
cameraRouter.put("/cameras/:id", CamerasController.update);
cameraRouter.delete("/cameras/:id", CamerasController.delete);


export default cameraRouter;
