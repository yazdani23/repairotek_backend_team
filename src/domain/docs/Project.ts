import { Document, Schema } from "mongoose";

export interface ProjectDoc extends Document {
  projectCode: string;
  userId: Schema.Types.ObjectId; // Array of user ObjectIds
  title: string;
  zoneId: Schema.Types.ObjectId; // Array of zone ObjectIds
  issueDateTime: Date;
  areaLength: number; // Number of
  areaWidth: number; // Number of
  areaHeight: number; // Number of
  description: string;
}
