import { Schema } from "mongoose";
import { ProjectEmployeeDoc } from "../docs/ProjectEmployee";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ProjectEmployeeSchema = generateSchema<ProjectEmployeeDoc>("ProjectEmployee",
  {
    projectId: { type: Schema.Types.ObjectId, required: true },
    employeeId: { type: Schema.Types.ObjectId, required: true },
  },
);
export default ProjectEmployeeSchema;
