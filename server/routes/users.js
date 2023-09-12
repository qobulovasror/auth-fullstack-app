import { Router } from "express";
import UserController from "../controller/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const UserRouter = Router();
UserRouter.get("/", [authMiddleware, roleMiddleware], UserController.GetUsers);

UserRouter.get("/:id", [authMiddleware], UserController.GetUserById);

UserRouter.post("/", [authMiddleware], UserController.AddUser);

UserRouter.put("/:id", [authMiddleware], UserController.UpdateUser);

UserRouter.delete("/:id", [authMiddleware, roleMiddleware], UserController.DeleteUser);

export {UserRouter};
