import bcrypt from 'bcrypt';
import User from "../model/userModel.js";
import UserValidator from "../validators/userValidator.js";

export default async function authController(req, res, next) {
  try {
    const { error } = await UserValidator.AuthUserValidator(req.body);
    if (error) throw new res.error(400, error.details[0].message);
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new res.error(404, "username or password incorrect");
    const isValidPwt = await bcrypt.compare(req.body.password, user.password);
    if(!isValidPwt)
        throw new res.error(404, "username or password incorrect");
    const token = user.generateAuthToken();
    res.header({"x-auth-token": token}).json({
        name: user.name,
        email: user.email,
        role: user.role,
    });
  } catch (error) {
    next(error);
  }
}