import { MediaSubjectDoc } from "../docs/MediaSubject";
import { generateSchema } from "../../utils/generators/modelGenerator";

const MediaSubjectModel = generateSchema<MediaSubjectDoc>("MediaSubject",
{
  title: { type: String, required: true },
  description: { type: String, required: true },
});


export default MediaSubjectModel;