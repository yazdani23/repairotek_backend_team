import { Document } from "mongoose";

export interface DepartmentDoc extends Document {
  title: string;
  description: string;
}
