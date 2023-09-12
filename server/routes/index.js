import Express from "express";
import { errorHandlerMiddleware } from "../helpers/CustomError.js";
import { CustomErrorMiddleware } from "../middlewares/CustomErrorMiddlewares.js";
import {UserRouter} from "./users.js";
import {Auth} from "./auth.js";

export default function Routes(app) {
  //middlewares
  app.use(Express.json());
  app.use(Express.urlencoded({ extended: true }));

  //use custom error handler
  app.use(CustomErrorMiddleware);

  //app routes
  app.use('/api/user', UserRouter)
  app.use('/api/auth', Auth)

  //use route error handler
  app.use(errorHandlerMiddleware);
}
