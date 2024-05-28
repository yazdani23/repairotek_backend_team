
import express from "express";
import CountryController from "../controllers/CountryController";

const countryRouter = express.Router();

countryRouter.get("/countrys/:id", CountryController.getById);
countryRouter.get("/countrys", CountryController.getAll);
countryRouter.post("/countrys", CountryController.create);
countryRouter.put("/countrys/:id", CountryController.update);
countryRouter.delete("/countrys/:id", CountryController.delete);

export default countryRouter;
