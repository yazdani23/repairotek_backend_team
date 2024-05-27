import { Document, Schema } from "mongoose";
import { ProjectDoc } from "./Project";

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export interface EmployeeDoc extends Document {
  employeeCode: number;
  gender: Gender;
  firstName: string;
  lastName: string;
  telephone?: string;
  mobile: string; // Changed to string to support international phone numbers
  email: string;
  address: string;
  profilePhoto?: string;
  roleId: Schema.Types.ObjectId;
  password: string;
  lastActivity?: number;
  hireDate?: Date; // Date
  jobId?: Schema.Types.ObjectId; // Array of job ObjectIds
  departmentId?: Schema.Types.ObjectId; // Array of department ObjectIds
  skillDescription?: string;
  description?: string;
}
