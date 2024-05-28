
import express from "express";
import MaterialController from "../controllers/MaterialController";

const materialRouter = express.Router();

materialRouter.get("/materials/:id", MaterialController.getById);
materialRouter.get("/materials", MaterialController.getAll);
materialRouter.post("/materials", MaterialController.create);
materialRouter.put("/materials/:id", MaterialController.update);
materialRouter.delete("/materials/:id", MaterialController.delete);

export default materialRouter;
