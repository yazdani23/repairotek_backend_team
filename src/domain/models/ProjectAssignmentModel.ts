import { Schema } from "mongoose";
import { ProjectAssignmentDoc } from "../docs/ProjectAssignment";
import { generateSchema } from "../../utils/generators/modelGenerator";


const ProjectAssignmentModel = generateSchema<ProjectAssignmentDoc>("ProjectAssignment",
  {
    projectId: { type: Schema.Types.ObjectId,ref:"Project", required: true },
    employeeId: { type: Schema.Types.ObjectId,ref:"Employee", required: true },
    equipmentId: { type: Schema.Types.ObjectId,ref:"Equipment", required: true },
    assignDate: { type: Date, required: true },
    estimatedHourPerPerson:{type:Number,required: true},
    description: { type: String } 
  },
);

export default ProjectAssignmentModel;
 
