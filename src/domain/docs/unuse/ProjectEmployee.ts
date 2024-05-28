import { Document, Schema } from "mongoose";

export interface ProjectEmployeeDoc extends Document {
  projectId: Schema.Types.ObjectId;
  employeeId: Schema.Types.ObjectId;
  countHour: number,
  costPerHour: number
}
