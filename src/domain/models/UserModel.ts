import { Schema } from "mongoose";
import { UserDoc } from "../docs/User";
import { generateSchema } from "../../utils/generators/modelGenerator";

const UserModel = generateSchema<UserDoc>("User", {
  userCode: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  webSite: { type: String },
  address: { type: String },
  telephone: { type: String },
  mobile: { type: Number, required: true },
  profilePhoto: { type: String },
  roleId: { type: Schema.Types.ObjectId, ref: "Role", required: true },
  password: { type: String, required: true },
  lastActivity: { type: Number },
});

export default UserModel;
// const UserSchema = new Schema<UserDoc>(
//   {
//     userCode: { type: Number, required: true },
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true },
//     webSite: { type: String },
//     address: { type: String },
//     telephone: { type: String },
//     mobile: { type: Number, required: true },
//     profilePhoto: { type: String },
//     roleId: [{ type: Schema.Types.ObjectId, ref: "Role", required: true }],
//     password: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// UserSchema.set("toJSON", {
//   transform: (doc, returnObj) => {
//     returnObj.id = returnObj._id.toString();
//     delete returnObj.__v;
//     delete returnObj._id;
//   },
// });

// const UserModel = model<UserDoc>("User", UserSchema);
// export default UserModel;

//Todo maybe Change
// UserSchema.virtual("zones", {
//   ref: "Zone",
//   localField: "_id",
//   foreignField: "userIds",
// });
