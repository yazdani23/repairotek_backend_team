import { Document } from "mongoose";

export interface InjuryTypeDoc extends Document {
  title: string;
  description: string;
}
