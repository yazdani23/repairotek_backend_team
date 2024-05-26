import  express from "express";
import CameraController from "../controllers/CameraController";

const cameraRouter = express.Router();

cameraRouter.get("/cameras", CameraController.getAll);
cameraRouter.get("/cameras/:id", CameraController.getById);
cameraRouter.post("/cameras", CameraController.create);
cameraRouter.put("/cameras/:id", CameraController.update);
cameraRouter.delete("/cameras/:id", CameraController.delete);


export default cameraRouter;
