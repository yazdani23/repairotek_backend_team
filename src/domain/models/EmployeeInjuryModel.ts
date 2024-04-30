import { Schema } from "mongoose";
import { EmployeeInjuryDoc } from "../docs/EmployeeInjury";
import { generateSchema } from "../../utils/generators/modelGenerator";

const EmployeeInjuryModel = generateSchema<EmployeeInjuryDoc>("EmployeeInjury",
{
  employeeId: { type: Schema.Types.ObjectId, required: true },
  injuryTypeId: { type: Schema.Types.ObjectId, required: true },
  injuryDateTime: { type: Date, required: true },
  insurance: { type: Boolean, required: true },
});
export default EmployeeInjuryModel;
