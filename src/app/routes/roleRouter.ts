import  express from "express";
import RolesController from "../controllers/RoleController";

const roleRouter = express.Router();

roleRouter.get("/roles", RolesController.getAll);
roleRouter.get("/roles/:id", RolesController.getById);
roleRouter.post("/roles", RolesController.create);
roleRouter.put("/roles/:id", RolesController.update);
roleRouter.delete("/roles/:id", RolesController.delete);


export default roleRouter;
