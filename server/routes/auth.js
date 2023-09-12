import { Router } from "express";
import authController from "../controller/authController.js";

const Auth = Router();

Auth.post("/", authController);

export {Auth};
