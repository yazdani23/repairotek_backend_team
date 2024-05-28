import { Document } from "mongoose";

export interface TaskDoc extends Document {
  title: string;
  description: string;
  status: string;
  createdAt?: Date; // Automatically managed by Mongoose
  updatedAt?: Date; // Automatically managed by Mongoose
}
