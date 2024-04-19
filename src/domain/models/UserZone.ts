import { model, Schema } from "mongoose";
import { UserZoneDoc } from "../../types/userZone";

const userZoneSchema = new Schema<UserZoneDoc>(
  {
    userid: { type: Schema.Types.ObjectId, required: true },
    zoneid: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

userZoneSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const ProjectCamera = model<UserZoneDoc>("UserZone", userZoneSchema);
