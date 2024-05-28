import { Document } from "mongoose";

export interface InsuranceDoc extends Document {
  title: string;
  code: string;
  description: string;
  isActive: boolean;
}
