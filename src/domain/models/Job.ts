import { model, Schema } from "mongoose";
import { JobDoc } from "../docs/Job";

const jobSchema = new Schema<JobDoc>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

jobSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Job = model<JobDoc>("Job", jobSchema);
