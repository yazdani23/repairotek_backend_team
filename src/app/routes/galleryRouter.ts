import express from "express";
import GalleryController from "../controllers/ProjectGalleryController";
const galleryRouter = express.Router();

// galleryRouter.get("/project/gallery", GalleryController.getAll);
// galleryRouter.get("/project/gallery/:id", GalleryController.getById);
galleryRouter.post("/project/gallery", GalleryController.create);
galleryRouter.put("/project/gallery/:id", GalleryController.update);
galleryRouter.delete("/project/gallery/:id", GalleryController.delete);


export default galleryRouter;
