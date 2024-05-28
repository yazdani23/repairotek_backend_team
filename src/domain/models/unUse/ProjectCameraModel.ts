import { Schema } from "mongoose";
import { ProjectCameraDoc } from "../docs/unuse/ProjectCamera";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ProjectCameraModel = generateSchema <ProjectCameraDoc>("ProjectCamera",
{
  projectId: { type: Schema.Types.ObjectId,ref:"Project", required: true },
  cameraId: { type: Schema.Types.ObjectId, ref:"Camera",required: true },
});


export default ProjectCameraModel;
