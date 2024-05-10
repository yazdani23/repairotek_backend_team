import { Document, Schema } from "mongoose";

export interface ProjectDoc extends Document {
  projectCode: string;
  userZoneId: Schema.Types.ObjectId; // Array of user ObjectIds
  title: string;
  // zoneId: Schema.Types.ObjectId; // Array of zone ObjectIds
  issueDateTime: Date;
  areaLength: number; // Number of
  areaWidth: number; // Number of
  areaHeight: number; // Number of
  measureUnit: string; // String
  description: string;
  longitude: number;
  latitude: number;
  status: string; // Array of
}
