import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["admin", "superadmin", "user"],
  },
});

UserSchema.methods.generateAuthToken = function(){
  let token = jwt.sign({_id: this._id, role: this.role}, process.env.JWT_WEB_TOKEN_KEY);
  return token;
}

export default mongoose.model("User", UserSchema);