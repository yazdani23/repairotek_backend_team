import { Document, Schema } from "mongoose";

export interface EmployeeTimeCardLogDoc extends Document {
  employeeId: Schema.Types.ObjectId;
  timeCardDate: Date;
  startTime: string; // ISO 8601 string
  endTime: string; // ISO 8601 string
  overTime: number; // in minutes
  restTime: number; // in minutes
  overTimePayRate: number;
  wageRate: number;
  createdBy: Schema.Types.ObjectId;
  updatedBy: Schema.Types.ObjectId;
}
