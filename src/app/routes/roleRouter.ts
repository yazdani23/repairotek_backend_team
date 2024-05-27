import  express from "express";
import RoleController from "../controllers/RoleController";

const roleRouter = express.Router();

roleRouter.get("/roles", RoleController.getAll);
roleRouter.get("/roles/:id", RoleController.getById);
roleRouter.post("/roles", RoleController.create);
roleRouter.put("/roles/:id", RoleController.update);
roleRouter.delete("/roles/:id", RoleController.delete);


export default roleRouter;
