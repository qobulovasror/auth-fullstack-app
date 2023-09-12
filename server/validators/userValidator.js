import Joi from "joi";

export default class UserValidator {
  static async AddUserValidator(data) {
    return Joi.object({
      name: Joi.string().required().min(2).max(150),
      email: Joi.string()
        .pattern(new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/))
        .required()
        .min(4)
        .max(120)
        .error(new Error("email is invalid!")),
      password: Joi.string().required().min(6),
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
        email: Joi.string()
        .pattern(new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/))
        .required()
        .min(4)
        .max(120)
        .error(new Error("email is invalid!")),
      password: Joi.string().required().min(6)
    }).validateAsync(data);
  }
}
