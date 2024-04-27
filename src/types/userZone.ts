import { Document, Schema } from "mongoose";

export interface UserZoneDoc extends Document {
  userId: Schema.Types.ObjectId;
  zoneId: Schema.Types.ObjectId;
}
