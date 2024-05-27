import { Schema } from "mongoose";
import { ProjectDoc } from "../docs/Project";
import { generateSchema } from "../../utils/generators/modelGenerator";

const projectStatus = ["UnderGoing", "Fail", "OnHold", "Compeleted", ""];
const unit = ["cm", "m", "in", "ft"];

const ProjectModel = generateSchema<ProjectDoc>("Project", {
  projectCode: { type: Number, required: true },
  adminId: { type: Schema.Types.ObjectId, ref: "Admin", required: true }, 
  title: { type: String, required: true },
  zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true },
  issueDateTime: { type: Date, required: true }, 
  areaLength: { type: Number, required: true },
  areaWidth: { type: Number, required: true },
  areaHeight: { type: Number, required: true },
  measureUnit: { type: String, enum: unit, default: "m" },
  description: { type: String, required: false },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  status: { type: String, enum: projectStatus, default: "UnderGoing" },
  materials: [
    {
      type: Schema.Types.ObjectId,
      ref: "MaterialModel",
    },
  ],
  equipments: [
    {
      type: Schema.Types.ObjectId,
      ref: "EquipmentModel",
    },
  ],
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "EmployeeModel",
    },
  ],
});

export default ProjectModel;
