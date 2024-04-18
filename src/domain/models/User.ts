import { model, Schema } from "mongoose";
import { UserDoc } from "../../types/user";

const userSchema = new Schema<UserDoc>(
  {
    usercode: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String },
    address: { type: String },
    telephone: { type: Number },
    mobile: { type: Number },
    profilephoto: { type: String },
    role: [{ type: Schema.Types.ObjectId, ref: "Role",required: true }
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



