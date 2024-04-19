import { Document, Schema } from "mongoose";

export interface ProjectEmployeeDoc extends Document {
  projectid: Schema.Types.ObjectId;
  employeeid: Schema.Types.ObjectId;
}
