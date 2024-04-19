import { model, Schema } from "mongoose";
import { ProjectCameraDoc } from "../../types/projectCamera";

const projectCameraSchema = new Schema<ProjectCameraDoc>(
  {
    projectid: { type: Schema.Types.ObjectId, required: true },
    cameraid: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

projectCameraSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const ProjectCamera = model<ProjectCameraDoc>("ProjectCamera", projectCameraSchema);
