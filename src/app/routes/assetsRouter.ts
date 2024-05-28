
import express from "express";
import AssetsController from "../controllers/AssetsController";

const assetsRouter = express.Router();

assetsRouter.get("/assetss/:id", AssetsController.getById);
assetsRouter.get("/assetss", AssetsController.getAll);
assetsRouter.post("/assetss", AssetsController.create);
assetsRouter.put("/assetss/:id", AssetsController.update);
assetsRouter.delete("/assetss/:id", AssetsController.delete);

export default assetsRouter;
