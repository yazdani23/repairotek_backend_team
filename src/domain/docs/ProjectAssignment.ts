import { Document, Schema } from "mongoose";

export interface ProjectAssignmentDoc extends Document {
  projectId: Schema.Types.ObjectId;
  employeeId: Schema.Types.ObjectId;
  equipmentId: Schema.Types.ObjectId;
  assignDate: Date;
  estimatedHourPerPerson: number;
  description: string;
}
