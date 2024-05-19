import { ReportDoc } from "../docs/Report";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

const ReportModel = generateSchema<ReportDoc>("Report", {
  title: { type: String, required: true },
  description: { type: String, required: false, default: "" }, // Optional with default empty string
  reportDate: { type: Date, required: true},
  projectGalleryId: [
    { type: Schema.Types.ObjectId, ref: "ProjectGallery", required: true },
  ],
});

export default ReportModel;

