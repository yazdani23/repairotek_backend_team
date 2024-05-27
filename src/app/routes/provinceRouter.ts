import  express from "express";
import ProvinceController from "../controllers/ProvinceController";

const provinceRouter = express.Router();

provinceRouter.get("/provinces", ProvinceController.getAll);
provinceRouter.get("/provinces/:id", ProvinceController.getById);
provinceRouter.post("/provinces", ProvinceController.create);
provinceRouter.put("/provinces/:id", ProvinceController.update);
provinceRouter.delete("/provinces/:id", ProvinceController.delete);


export default provinceRouter;
