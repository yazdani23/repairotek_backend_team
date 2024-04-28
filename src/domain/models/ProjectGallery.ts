import { model, Schema } from "mongoose";
import { ProjectGalleryDoc } from "../docs/ProjectGallery";

const projectGallerySchema = new Schema<ProjectGalleryDoc>(
  {
    projectId: { type: Schema.Types.ObjectId, required: true },
    employeeId: { type: Schema.Types.ObjectId, required: true },
    media: { type: String, required: true },
    mediaDateTime: { type: String, required: true },
    mediaSubjectId: { type: Schema.Types.ObjectId, required: true },
    location: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

projectGallerySchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const ProjectGallery = model<ProjectGalleryDoc>(
  "ProjectGallery",
  projectGallerySchema
);
