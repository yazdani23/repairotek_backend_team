import { Document } from "mongoose";

export interface MaterialDoc extends Document {
  name: string;
  description: string;
  price: number;
}
