import { model, Schema } from "mongoose";
import { MediaSubjectDoc } from "../docs/MediaSubject";

const mediaSubjectobSchema = new Schema<MediaSubjectDoc>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

mediaSubjectobSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Job = model<MediaSubjectDoc>("MediaSubject", mediaSubjectobSchema);
