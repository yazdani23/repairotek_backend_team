import { Document } from "mongoose";

export interface DamageTypeDoc extends Document {
  title: string;
  description: string;
}
