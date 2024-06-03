import { Document } from "mongoose";

export interface MaterialDoc extends Document {
  name: string;
  description: string;
  pricePerUnit?: number;
  value:number;
  unit:string;
}
