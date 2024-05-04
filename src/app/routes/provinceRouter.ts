import  express from "express";
import ProvincesController from "../controllers/ProvinceController";

const provinceRouter = express.Router();

provinceRouter.get("/provinces", ProvincesController.getAll);
provinceRouter.get("/provinces/:id", ProvincesController.getById);
provinceRouter.post("/provinces", ProvincesController.create);
provinceRouter.put("/provinces/:id", ProvincesController.update);
provinceRouter.delete("/provinces/:id", ProvincesController.delete);


export default provinceRouter;
