import { Document, Schema } from "mongoose";

export interface EmployeeTimeCardLogDoc extends Document {
  employeeId: Schema.Types.ObjectId;
  timeCardDate: Date;
  startTime: Date;
  endTime: Date;
  overTime: Date;
  restTime: Date;
  overTimePayRate: number;
  wageRate: number;
}