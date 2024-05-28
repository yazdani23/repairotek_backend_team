import { Schema } from "mongoose";
import {toJsonSchema } from "../../utils/generators/modelGenerator";
import UserModel from "./UserModel";
import { EmployeeDoc } from "../docs/Employee";

const maritalStatus=["Single", "Married", "Divorced", "Widowed"];
const contractType = ["Permanent", "Temporary", "Contract"];

const EmployeeModelSchema = new Schema<EmployeeDoc>({
  employeeCode: { type: Number, required: false },
  hireDate: { type: Date, required: false },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: false },
  skillDescription: { type: String, required: false },
  description: { type: String, required: false },
  dateOfBirth: { type: Date, required: false },
  maritalStatus: { type: String, enum: maritalStatus, required: false }, // وضعیت تأهل
  yearsOfExperience: { type: Number, required: false }, // تعداد سال‌های تجربه کاری
  contractType: { type: String, enum: contractType, required: false }, // نوع قرارداد
  bankAccountInfo: { type: String, required: false }, // اطلاعات حساب بانکی برای پرداخت حقوق
  insuranceNumber: { type: Number, enum: contractType, required: false }, // شماره بیمه
  // departmentId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Department",
  //   required: false,
  // },
});
// toJsonSchema(EmployeeModelSchema)

const EmployeeModel = UserModel.discriminator(
  "EmployeeModel",
  EmployeeModelSchema
);


export default EmployeeModel;
