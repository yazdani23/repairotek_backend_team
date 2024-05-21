import { Schema } from "mongoose";
import { ProjectDoc } from "../docs/Project";
import { generateSchema } from "../../utils/generators/modelGenerator";

const projectStatus = ["UnderGoing", "Fail", "OnHold", "Compeleted", ""];
const unit = ["cm", "m", "in", "ft"];

const ProjectModel = generateSchema<ProjectDoc>("Project", {
  projectCode: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Assuming User is the related model
  title: { type: String, required: true },
  zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true }, // Assuming Zone is the related model
  issueDateTime: { type: Date, required: true }, // Change type to Date
  areaLength: { type: Number, required: true },
  areaWidth: { type: Number, required: true },
  areaHeight: { type: Number, required: true },
  measureUnit:{type: String, enum: unit, default: "m"},
  description: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  status: { type: String, enum: projectStatus, default: "UnderGoing" },
});

export default ProjectModel;

////////////////////////////////
// import { Schema, model } from "mongoose";
// import { ProjectDoc } from "../docs/project";

// const ProjectSchema = new Schema<ProjectDoc>(
//   {
//     projectCode: { type: String, required: true },
//     userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Assuming User is the related model
//     title: { type: String, required: true },
//     zoneId: { type: Schema.Types.ObjectId, ref: "Zone", required: true }, // Assuming Zone is the related model
//     issueDateTime: { type: Date, required: true }, // Change type to Date
//     areaLength: { type: Number, required: true },
//     areaWidth: { type: Number, required: true },
//     areaHeight: { type: Number, required: true },
//     description: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// ProjectSchema.set("toJSON", {
//   transform: (doc, returnObj) => {
//     returnObj.id = returnObj._id.toString();
//     delete returnObj.__v;
//     delete returnObj._id;
//   },
// });

// const ProjectModel = model<ProjectDoc>("Project", ProjectSchema);
// export default ProjectModel
