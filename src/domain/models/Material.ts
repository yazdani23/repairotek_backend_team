import { model, Schema } from "mongoose";
import { MaterialDoc } from "../docs/Material";

const materialSchema = new Schema<MaterialDoc>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

materialSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Material = model<MaterialDoc>("Material", materialSchema);
