import { Schema } from "mongoose";
import { EmployeeDoc } from "../docs/Employee";
import { generateSchema } from "../../utils/generators/modelGenerator";

const EmployeeModel = generateSchema<EmployeeDoc>("Employee", {
  employeeCode: { type: Number, required: true },
  // employees: [type: Schema.Types.employee, required: true],
  gender: { type: Schema.Types.String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  telephone: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true }, //todo check
  address: { type: String, required: true },
  profilePhoto: { type: String, required: true }, //todo check
  hireDate: { type: Date, required: true },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  skillDescription: { type: String, required: true },
  description: { type: String, required: true },
});

export default EmployeeModel;
