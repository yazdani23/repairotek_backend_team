import  express from "express";
import PermissionController from "../controllers/PermissionController";

const permissionRouter = express.Router();
permissionRouter.get("/permissions", PermissionController.getAll);
permissionRouter.get("/permissions/:id", PermissionController.getById);
permissionRouter.post("/permissions", PermissionController.create);
permissionRouter.put("/permissions/:id", PermissionController.update);
permissionRouter.delete("/permissions/:id", PermissionController.delete);


export default permissionRouter;
