import { Document, Schema } from "mongoose";

export interface EmployeeInjuryDoc extends Document {
  employeeId: Schema.Types.ObjectId;
  injuryTypeId: Schema.Types.ObjectId;
  injuryDateTime: Date;
  insurance: boolean;
}
