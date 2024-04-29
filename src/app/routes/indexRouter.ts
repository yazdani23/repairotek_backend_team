import express from "express";
import authRouter from "./authRouter";
import userRouter from "./userRouter";
import projectRouter from "./projectRouter";
import employeeRouter from "./employeeRouter";
const indexRouter = express.Router();
// const { index, notFound } = require("../controllers/indexController");



indexRouter.use(authRouter);
indexRouter.use(userRouter);
indexRouter.use(projectRouter);
indexRouter.use(employeeRouter);
// indexRouter.use("*", notFound);

export default indexRouter;


// const verifyToken =require('../middlewares/jwt')
// const upload = require("../middlewares/multer")
// const multer = require("multer");
// const path = require("path");
// router.post("projects/uploadImage", uploadImageProduct);