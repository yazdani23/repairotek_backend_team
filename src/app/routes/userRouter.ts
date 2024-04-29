import express from "express";
import UserController from "../controllers/UserController";
const userRouter = express.Router();

userRouter.get("/users", UserController.getAll);
userRouter.get("/users/:id", UserController.getById);
userRouter.put("/users/:id", UserController.update);
userRouter.delete("/users/:id", UserController.delete);

export default userRouter;
