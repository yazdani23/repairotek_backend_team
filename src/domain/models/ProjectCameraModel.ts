import { Schema } from "mongoose";
import { ProjectCameraDoc } from "../docs/ProjectCamera";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ProjectCameraModel = generateSchema <ProjectCameraDoc>("ProjectCamera",
{
  projectId: { type: Schema.Types.ObjectId, required: true },
  cameraId: { type: Schema.Types.ObjectId, required: true },
});


export default ProjectCameraModel;
