import bcrypt from 'bcrypt';
import User from "../model/userModel.js";
import UserValidator from "../validators/userValidator.js";

export default async function authController(req, res, next) {
  try {
    const { error } = await UserValidator.UserLoginValidator(req.body);
    if (error) throw new res.error(401, error.details[0].message);
    const user = await User.findOne({
      $or: [{ email: req.body.email, username: req.body.username }],
    });
    if (!user) throw new res.error(400, "username or password incorrect");
    const isValidPwt = await bcrypt.compare(req.body.password, user.password);
    if(!isValidPwt)
        throw new res.error(400, "username or password incorrect");
    const token = user.generateAuthToken();
    res.header({"x-auth-token": token}).json({
        username: user.username,
        email: user.email,
        role: user.role,
        fullname: user.fullname
    });
  } catch (error) {
    if (!error.statusCode) error = new res.error(401, "Unauthorized!");
    next(error);
  }
}
