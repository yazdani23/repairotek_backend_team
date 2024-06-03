
import { generateSchema } from "../../utils/generators/modelGenerator";
import { ReportSubjectDoc } from "../docs/ReportSubject";

const ProjectGallerySubject = [
  "Daily",
  "Injury Employee",
  "Damage Equipment",
  "Materials",
  "Equipments",
  "Other",
];
const ProjectGallerySubjectModel = generateSchema<ReportSubjectDoc>(
  "ProjectGallerySubject",
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  }
);


export default ProjectGallerySubjectModel;