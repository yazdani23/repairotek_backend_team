import  express from "express";
import PermissionsController from "../controllers/PermissionController";

const permissionRouter = express.Router();

permissionRouter.get("/permissions", PermissionsController.getAll);
permissionRouter.get("/permissions/:id", PermissionsController.getById);
permissionRouter.post("/permissions", PermissionsController.create);
permissionRouter.put("/permissions/:id", PermissionsController.update);
permissionRouter.delete("/permissions/:id", PermissionsController.delete);


export default permissionRouter;
