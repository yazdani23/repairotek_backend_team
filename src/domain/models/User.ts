import { model, Schema } from "mongoose";
import { UserDoc } from "../../types/user";

const userSchema = new Schema<UserDoc>(
  {
    userCode: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    webSite: { type: String },
    address: { type: String },
    telephone: { type: String},
    mobile: { type: Number , required: true},
    profilePhoto: { type: String },
    roleId: [{ type: Schema.Types.ObjectId, ref: "Role",required: true }
    ],
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const User = model<UserDoc>("User", userSchema);



