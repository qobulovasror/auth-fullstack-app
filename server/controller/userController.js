import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../model/userModel.js";
import UserValidator from "../validators/userValidator.js";

export default class UserController {
  static async GetUsers(req, res, next) {
    try {
      const user = await User.find().select({ password: 0 });
      if (!user) throw new res.error(400, "User not found");
      res.json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async GetUserById(req, res, next) {
    try {
      const id = req.params;
      if (!id || !mongoose.Types.ObjectId.isValid(id))
        throw new res.error(400, "Id is invalid");
      const user = await User.findById(id).select({ password: 0 });
      if (!user) throw new res.error(400, "User not found");
      res.json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async AddUser(req, res, next) {
    try {
      const { error } = await UserValidator.UserRegisValidator(req.body);
      if (error) throw new res.error(400, error.details[0].message);
      let user = await User.findOne({
        $or: [{ email: req.body.email }, { username: req.body.username }],
      });
      if (user)
        throw new res.error(
          401,
          "This email or username was previously registered"
        );
      user = new User({
        ...req.body,
      });
      const salt = await bcrypt.genSalt();
      const hashPassword = bcrypt.hash(req.body.password, salt);
      user.password = hashPassword;
      await user.save();
      const token = user.generateAuthToken();
      res.header({ "x-auth-token": token }).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async UpdateUser(req, res, next) {
    try {
      const id = req.params;
      if (!id || !mongoose.Types.ObjectId.isValid(id))
        throw new res.error(401, "Id is invalid");
      let user = await User.findById(id);
      if (!user) throw new res.error(401, "users not found");
      const { error } = await UserValidator.UserUpdateValidator(req.body);
      if (error) throw new res.error(401, error.details[0].message);
      if (user.password !== req.body.password)
        throw new res.error(401, "old password is incorrect");
      user = await User.findOneAndUpdate(
        { _id: id },
        {
          password: req.body.newPassword,
          fullname: req.body.fullname,
          role: req.body.role,
        }
      );
      res.json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
