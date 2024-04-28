import { model, Schema } from "mongoose";
import { InjuryTypeDoc } from "../docs/InjuryType";

const injuryTypeSchema = new Schema<InjuryTypeDoc>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

injuryTypeSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const InjuryType = model<InjuryTypeDoc>("InjuryType", injuryTypeSchema);
