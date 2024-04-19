import { Document, Schema } from "mongoose";

export interface ZoneDoc extends Document {
  name: string;
  provinceid: Schema.Types.ObjectId; // Array of province ObjectIds
  state: string;
  roadway: string;
  ipaddress: string;
  timezone: string;
  longitude: number;
  latitude: number;
  description: string;
}
