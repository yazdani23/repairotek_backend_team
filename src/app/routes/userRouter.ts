import express from "express";
import UsersController from "../controllers/UserController";
import validateMiddleware from "../middlewares/validationMiddleware"; // Import your validation middleware here
import UserValidationSchema from "../../domain/validations/UserValidation";



const userRouter = express.Router();

// Define routes for handling CRUD operations on users
userRouter.get("/users", UsersController.getAll);
userRouter.get("/users/:id", UsersController.getById);
userRouter.post("/users", UsersController.create);

// Route for updating a user. Assuming validationMiddleware is used to validate the data being sent.
userRouter.put(
  "/users/:id",
  UsersController.update
);

// Route for deleting a user
userRouter.delete("/users/:id", UsersController.delete);

export default userRouter;
