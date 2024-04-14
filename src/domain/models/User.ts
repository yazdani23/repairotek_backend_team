import mongoose, { Document, Schema } from "mongoose";
import { UserDoc, userRoles } from "../../types/user";



const UserSchema = new Schema<UserDoc>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  term: { type: Boolean, required: true },
  role: { type: String, enum: userRoles, default: "USER" },
});

UserSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.password;
    delete returnObj.__v;
    delete returnObj._id;
    delete returnObj.term;
  },
});

const User = mongoose.model<UserDoc>("User", UserSchema);

export default User;


