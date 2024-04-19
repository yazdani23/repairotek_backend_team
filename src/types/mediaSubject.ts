import { Document } from "mongoose";

export interface MediaSubjectDoc extends Document {
  title: string;
  description: string;
}
