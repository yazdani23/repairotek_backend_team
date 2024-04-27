import { model, Schema } from "mongoose";
import { ProjectDoc } from "../../types/project";

const projectSchema = new Schema<ProjectDoc>(
  {
    projectCode: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Assuming User is the related model
    title: { type: String, required: true },
    zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true }, // Assuming Zone is the related model
    issueDateTime: { type: Date, required: true }, // Change type to Date
    areaLength: { type: Number, required: true },
    areaWidth: { type: Number, required: true },
    areaHeight: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

projectSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Project = model<ProjectDoc>("Project", projectSchema);
