import { Types } from "mongoose";
import { AssetsDoc } from "../Assets";

export interface AssetsProjectDoc extends AssetsDoc {
  projectId: Types.ObjectId;
}
