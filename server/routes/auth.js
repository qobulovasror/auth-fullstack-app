import { Router } from "express";
import authController from "../controller/authController.js";

const Auth = Router();
/**
 * @swagger
 * /api/auth:
 *   post:
 *     summary: Auth user
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Auth user
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *              - email
 *              - password
 *           properties:
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
Auth.post("/", authController);

export {Auth};
