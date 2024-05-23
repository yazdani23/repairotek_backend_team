import express from "express";
import GallerysController from "../controllers/ProjectGalleryController";
const galleryRouter = express.Router();

galleryRouter.get("/project/gallery", GallerysController.getAll);
galleryRouter.get("/project/gallery/:id", GallerysController.getById);
galleryRouter.post("/project/gallery", GallerysController.create);
galleryRouter.put("/project/gallery/:id", GallerysController.update);
galleryRouter.delete("/project/gallery/:id", GallerysController.delete);

export default galleryRouter;
