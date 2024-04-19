import { Document, Schema } from "mongoose";
import { ProjectDoc } from "./project";

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export interface EmployeeDoc extends Document {
  employeecode: number;
  // projects: ProjectDoc; // Array of project Object
  gender: Gender;
  firstname: string;
  lastname: string;
  telephone: string;
  mobile: string; // Changed to string to support international phone numbers
  email: string;
  address: string;
  profilephoto: string; // Assuming profile photo is stored as a string (URL or file path)
  hiredate: Date; // Date
  jobid: Schema.Types.ObjectId; // Array of job ObjectIds
  departmentid: Schema.Types.ObjectId; // Array of department ObjectIds
  skilldescription: string;
  description: string;
}
