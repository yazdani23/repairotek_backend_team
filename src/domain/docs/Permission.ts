import { Document, Schema } from "mongoose";

export interface PermissionDoc extends Document {
  name: string;
  description: string;
  resource: string;
  action: string;
  roleIds: [Schema.Types.ObjectId];
}
