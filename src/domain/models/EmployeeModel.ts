import { Schema } from "mongoose";
import {toJsonSchema } from "../../utils/generators/modelGenerator";
import UserModel from "./UserModel";
import { EmployeeDoc } from "../docs/Employee";

const EmployeeModelSchema = new Schema<EmployeeDoc>({
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
toJsonSchema(EmployeeModelSchema)

const EmployeeModel = UserModel.discriminator(
  "EmployeeModel",
  EmployeeModelSchema
);


export default EmployeeModel;
