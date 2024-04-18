import { Document, Schema } from "mongoose";

export interface ProvinceDoc extends Document {
  code: Number;
  name: string;
}
