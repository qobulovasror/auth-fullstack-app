import Joi from "joi";

export default class UserValidator {
  static async AddUserValidator(data) {
    return Joi.object({
      name: Joi.string().required(),
      password: Joi.string().required().min(6),
      email: Joi.string().required().min(4).max(100),
      role: Joi.string().default("user"),
    }).validateAsync(data);
  }

  static async UpdateUserValidator(data) {
    return Joi.object({
      password: Joi.string().required().min(6).max(150),
      newPassword: Joi.string().min(6).max(150),
      fullname: Joi.string().required().max(3).max(100),
      role: Joi.string().required(),
    }).validateAsync(data);
  }

  static async AuthUserValidator(data) {
    return Joi.object({
      username: Joi.string()
        .pattern(new RegExp(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/))
        .required()
        .error(new Error("Username is invalid!")),
      password: Joi.string().required().min(6),
      email: Joi.string().required().min(4).max(100),
    }).validateAsync(data);
  }
}
