import JWT from 'jsonwebtoken';

export default async function roleMiddleware(req, res, next) {
  try {
    const role = JWT.verify(req.headers['x-auth-token'], process.env.JWT_WEB_TOKEN_KEY).role;
    if (role !== 'admin' || role !=='superadmin') 
        throw new res.error(403, "forbidden")
    next();
  } catch (error) {
    if (!error.code) error = new res.error(401, "Unauthorized!");
    next(error);
  }
}
