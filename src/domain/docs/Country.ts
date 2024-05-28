import { Document } from "mongoose";

export interface CountryDoc extends Document {
  code: number;
  name: string;
}
