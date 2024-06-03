
import express from "express";
import ReportSubjectController from "../controllers/ReportSubjectController";

const reportSubjectRouter = express.Router();

reportSubjectRouter.get("/reportSubjects/:id", ReportSubjectController.getById);
reportSubjectRouter.get("/reportSubjects", ReportSubjectController.getAll);
reportSubjectRouter.post("/reportSubjects", ReportSubjectController.create);
reportSubjectRouter.put("/reportSubjects/:id", ReportSubjectController.update);
reportSubjectRouter.delete("/reportSubjects/:id", ReportSubjectController.delete);

export default reportSubjectRouter;
