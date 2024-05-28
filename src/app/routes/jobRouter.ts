
import express from "express";
import JobController from "../controllers/JobController";

const jobRouter = express.Router();

jobRouter.get("/jobs/:id", JobController.getById);
jobRouter.get("/jobs", JobController.getAll);
jobRouter.post("/jobs", JobController.create);
jobRouter.put("/jobs/:id", JobController.update);
jobRouter.delete("/jobs/:id", JobController.delete);

export default jobRouter;
