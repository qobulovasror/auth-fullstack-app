import { Router } from "express";
import UserController from "../controller/userController.js";

const UserRouter = Router();
UserRouter.get("/", UserController.GetUsers);

UserRouter.get("/:id", UserController.GetUserById);

UserRouter.post("/", UserController.AddUser);

UserRouter.put("/:id", UserController.UpdateUser);

export {UserRouter};
