import { Schema } from "mongoose";
import { EmployeeDoc } from "../docs/Employee";
import { generateSchema } from "../../utils/generators/modelGenerator";
import UserModel from "./UserModel";

const EmployeeModelSchema = generateSchema<EmployeeDoc>("Employee", {
  employeeCode: { type: Number, required: false },
  gender: { type: String, required: true },
  hireDate: { type: Date, required: false },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: false },
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: false,
  },
  skillDescription: { type: String, required: false },
  description: { type: String, required: false },
});

const EmployeeModel = UserModel.discriminator(
  "EmployeeModel",
  EmployeeModelSchema
);


export default EmployeeModel;
