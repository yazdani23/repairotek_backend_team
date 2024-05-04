import { Document, Schema } from "mongoose";

export interface UserDoc extends Document {
  userCode: Number;
  firstName: string;
  lastName: string;
  email: string;
  webSite: string;
  address: string;
  telephone: string;
  mobile: number;
  profilePhoto: string; // Assuming profile photo is stored as a string (URL or file path)
  roleId: Schema.Types.ObjectId; // Array of role ObjectIds
  password: string;
}
