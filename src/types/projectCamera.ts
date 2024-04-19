import { Document, Schema } from "mongoose";

export interface ProjectCameraDoc extends Document {
  projectid: Schema.Types.ObjectId;
  cameraid: Schema.Types.ObjectId;
}
