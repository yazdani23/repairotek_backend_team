import { Document, Schema } from "mongoose";

export interface ProjectDoc extends Document {
  projectcode: string;
  userid: Schema.Types.ObjectId; // Array of user ObjectIds
  title: string;
  zoneid: Schema.Types.ObjectId; // Array of zone ObjectIds
  issuedatetime: Date;
  arealength: number; // Number of
  areawidth: number; // Number of
  areaheight: number; // Number of
  description: string;
}
