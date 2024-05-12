import { Schema } from "mongoose";
import { ProjectGalleryDoc } from "../docs/ProjectGallery";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ProjectGalleryModel = generateSchema<ProjectGalleryDoc>("ProjectGallery",
  {
    projectId: { type: Schema.Types.ObjectId, required: true },
    employeeId: { type: Schema.Types.ObjectId, required: true },
    media: { type: String, required: true },
    mediaDateTime: { type: String, required: true },
    mediaSubjectId: { type: Schema.Types.ObjectId, required: true },
    location: { type: String, required: true },
    description: { type: String },
  },
);

export default ProjectGalleryModel;
 
