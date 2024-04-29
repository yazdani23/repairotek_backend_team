import { model, Schema } from "mongoose";
import { ProjectCameraDoc } from "../docs/ProjectCamera";

const projectCameraSchema = new Schema<ProjectCameraDoc>(
  {
    projectId: { type: Schema.Types.ObjectId, required: true },
    cameraId: { type: Schema.Types.ObjectId, required: true },
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

export const ProjectCamera = model<ProjectCameraDoc>(
  "ProjectCamera",
  projectCameraSchema
);
