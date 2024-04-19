import { Document, Schema } from "mongoose";

export interface UserZoneDoc extends Document {
  userid: Schema.Types.ObjectId;
  zoneid: Schema.Types.ObjectId;
}
