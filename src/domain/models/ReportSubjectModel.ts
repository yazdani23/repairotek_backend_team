
import { generateSchema } from "../../utils/generators/modelGenerator";
import { ReportSubjectDoc } from "../docs/ReportSubject";

const ReportubjectModel = generateSchema<ReportSubjectDoc>("MediaSubject",
{
  title: { type: String, required: true },
  description: { type: String, required: false },
});


export default ReportubjectModel;