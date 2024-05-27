
import express from "express";
import DamageTypeController from "../controllers/DamageTypeController";

const damageTypeRouter = express.Router();

damageTypeRouter.get("/damageTypes/:id", DamageTypeController.getById);
damageTypeRouter.get("/damageTypes", DamageTypeController.getAll);
damageTypeRouter.post("/damageTypes", DamageTypeController.create);
damageTypeRouter.put("/damageTypes/:id", DamageTypeController.update);
damageTypeRouter.delete("/damageTypes/:id", DamageTypeController.delete);

export default damageTypeRouter;
