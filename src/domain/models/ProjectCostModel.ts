import { Schema } from "mongoose";
import { ProjectCostDoc } from "../docs/ProjectCost";
import { generateSchema } from "../../utils/generators/modelGenerator";

const registrant = ["user", "employee"];
const ProjectCostModel = generateSchema<ProjectCostDoc>("ProjectCost", {
  projectId: { type: Schema.Types.ObjectId, ref:"Project",required: true },
  materialId: { type: Schema.Types.ObjectId,ref:"Material", required: true },
  costDate: { type: Date, required: true },
  unitCount: { type: Number, required: true },
  unitCost: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  //Todo: chose one of these
  costRegistrantId: { type: Schema.Types.ObjectId,ref:"User,Employee", required: true },
  costRegistrantType: { type: String, enum: registrant, default: "user" },
  docs: [{ type: ImageData, required: true }], //docs for cost that were scaned
});


export default ProjectCostModel;
 
 
  