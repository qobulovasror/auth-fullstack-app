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
      next(error);
    }
  }

  static async GetUserById(req, res, next) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id))
        throw new res.error(400, "Id is invalid");
      const user = await User.findById(id).select({ password: 0 });
      if (!user) throw new res.error(404, "User not found");
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async AddUser(req, res, next) {
    try {
      const { error } = await UserValidator.AddUserValidator(req.body);
      if (error) throw new res.error(400, error.details[0].message);
      let user = await User.findOne({ email: req.body.email });
      if (user)
        throw new res.error(400, "This email was previously registered");
      user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: (req.body.role)? req.body.role : "user",
      });
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashPassword;
      await user.save();
      const token = user.generateAuthToken();
      // res.header({ "x-auth-token": token }).status(201).json({email: user.email, name: user.name, role: user.role});
      res.status(201).json({email: user.email, name: user.name, role: user.role, "x-auth-token": token});
    } catch (error) {
      next(error);
    }
  }

  static async UpdateUser(req, res, next) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id))
        throw new res.error(400, "Id is invalid");
      let user = await User.findById(id);
      if (!user) throw new res.error(404, "users not found");
      const { error } = await UserValidator.UpdateUserValidator(req.body);
      if (error) throw new res.error(400, error.details[0].message);
      if (user.password !== req.body.password)
        throw new res.error(400, "old password is incorrect");
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
      next(error);
    }
  }

  static async DeleteUser(req, res, next) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id))
        throw new res.error(400, "Id is invalid");
      let user = await User.findByIdAndDelete(id);
      if (!user) throw new res.error(404, "users not found");
      res.json({
        name: user.name,
        email: user.email,
        role: user.role
      });
    } catch (error) {
      next(error);
    }
  }
}
