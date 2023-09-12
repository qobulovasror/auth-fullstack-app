import { CustomError } from "../helpers/CustomError.js";

export function CustomErrorMiddleware(req, res, next){
    res.error = CustomError;
    next()
}