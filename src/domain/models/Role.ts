import { model, Schema } from "mongoose";
import { RoleDoc } from "../../types/role";


const roleSchema = new Schema<RoleDoc>(
  {
    name: { type: String, required: true },
    roleType: { type: String, required: true },
  },
  { timestamps: true }
);

roleSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Role = model<RoleDoc>("Role", roleSchema);



