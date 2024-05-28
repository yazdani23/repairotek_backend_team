
import express from "express";
import ResourceController from "../controllers/ResourceController";

const resourceRouter = express.Router();

resourceRouter.get("/resources/:id", ResourceController.getById);
resourceRouter.get("/resources", ResourceController.getAll);
resourceRouter.post("/resources", ResourceController.create);
resourceRouter.put("/resources/:id", ResourceController.update);
resourceRouter.delete("/resources/:id", ResourceController.delete);

export default resourceRouter;
