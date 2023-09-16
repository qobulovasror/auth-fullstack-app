import { Router } from "express";
import UserController from "../controller/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const UserRouter = Router();
/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get all users
 *     parameters:
 *       - in: header
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                      _id:
 *                          type: ObjectId
 *                          description: The user ID.
 *                          example: 65006ec9d95b0f1227a572da
 *                      name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Asror Qobulov
 *                      email:
 *                          type: string
 *                          description: The user's email
 *                          example: abc@gmail.com
 *                      role:
 *                          type: string
 *                          description: The user's role
 *                          example: user
 */
UserRouter.get("/", [authMiddleware, roleMiddleware], UserController.GetUsers);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get one user with id 
 *     parameters:
 *       - in: path
 *         name: user id
 *         required: true
 *         schema:
 *           type: string
 *       - in: header
 *         name: user token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      _id:
 *                          type: ObjectId
 *                          description: The user ID.
 *                          example: 65006ec9d95b0f1227a572da
 *                      name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Asror Qobulov
 *                      email:
 *                          type: string
 *                          description: The user's email
 *                          example: abc@gmail.com
 *                      role:
 *                          type: string
 *                          description: The user's role
 *                          example: user
 */
UserRouter.get("/:id", [authMiddleware], UserController.GetUserById);

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Add user
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *              - name
 *              - email
 *              - password
 *           properties:
 *              name: 
 *                  type: string
 *              email: 
 *                  type: string
 *              password: 
 *                  type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      _id:
 *                          type: ObjectId
 *                          description: The user ID.
 *                          example: 65006ec9d95b0f1227a572da
 *                      name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Asror Qobulov
 *                      email:
 *                          type: string
 *                          description: The user's email
 *                          example: abc@gmail.com
 *                      role:
 *                          type: string
 *                          description: The user's role
 *                          example: user
 */
UserRouter.post("/", UserController.AddUser);

/**
 * @swagger
 * /api/user:
 *   put:
 *     summary: update user data.
 *     parameters:
 *       - in: header
 *         name: user token
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: user
 *         description: Upadet user data.
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *              - name
 *              - password
 *           properties:
 *              name: 
 *                  type: string
 *              password: 
 *                  type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      _id:
 *                          type: ObjectId
 *                          description: The user ID.
 *                          example: 65006ec9d95b0f1227a572da
 *                      name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Asror Qobulov
 *                      email:
 *                          type: string
 *                          description: The user's email
 *                          example: abc@gmail.com
 *                      role:
 *                          type: string
 *                          description: The user's role
 *                          example: user
 */
UserRouter.put("/:id", [authMiddleware], UserController.UpdateUser);


UserRouter.delete(
  "/:id",
  [authMiddleware, roleMiddleware],
  UserController.DeleteUser
);

export { UserRouter };
