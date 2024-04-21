import { Document } from "mongoose";

export interface CameraDoc extends Document {
  modelName: string;
  cameraIp: string;
  cameraSpecification: string;
}
