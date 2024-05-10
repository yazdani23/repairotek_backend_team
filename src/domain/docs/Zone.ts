import { Document, Schema } from "mongoose";

export interface ZoneDoc extends Document {
  name: string;
  provinceId: Schema.Types.ObjectId; // Array of province ObjectIds
  state: string;
  roadWay: string;
  longitude: number;
  latitude: number;
  description: string;
}
