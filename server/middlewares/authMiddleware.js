import JWT from 'jsonwebtoken';
import mongoose from 'mongoose';

export default async function authMiddleware(req, res, next) {
  try {
    const token = req.header('x-auth-token');
    if (!token)
      throw new response.error(401, "Token not found");
    const data = JWT.verify(token, process.env.JWT_WEB_TOKEN_KEY);
    if(!mongoose.Types.ObjectId.isValid(data._id))
        throw new res.error(401, "Unauthorized")
    req.user = data;
    next()
  } catch (error) {
    if (!error.statusCode) 
        error = new res.error(401, "Unauthorized!");
    next(error);
  }
}
