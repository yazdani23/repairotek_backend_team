import { Document } from "mongoose";

export interface MaterialDoc extends Document {
  title: string;
  description: string;
}
