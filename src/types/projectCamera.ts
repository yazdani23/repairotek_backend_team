import { Document, Schema } from "mongoose";

export interface ProjectCameraDoc extends Document {
  projectId: Schema.Types.ObjectId;
  cameraId: Schema.Types.ObjectId;
}
