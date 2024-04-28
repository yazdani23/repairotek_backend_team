import { model, Schema } from "mongoose";
import { DamageTypeDoc } from "../docs/DamageType";

const damageTypeSchema = new Schema<DamageTypeDoc>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

damageTypeSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const DamageType = model<DamageTypeDoc>("DamageType", damageTypeSchema);
