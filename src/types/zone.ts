import { Document, Schema } from "mongoose";

export interface ZoneDoc extends Document {
  name: string;
  province: Schema.Types.ObjectId; // Array of role ObjectIds
  state: string;
  roadway: string;
  ipaddress: string;
  timezone: string;
  longitude: number;
  latitude: number;
  description: string;
}
