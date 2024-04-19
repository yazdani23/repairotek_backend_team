import { Document } from "mongoose";

export interface CameraDoc extends Document {
  modelname: string;
  cameraip: string;
  cameraspecification: string;
}
