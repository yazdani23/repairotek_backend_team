import { Document, Schema } from "mongoose";

export interface UserDoc extends Document {
  usercode:number;
  firstname: string;
  lastname: string;
  email: string;
  website: string;
  address: string;
  telephone: string;
  mobile: number;
  profilephoto: string; // Assuming profile photo is stored as a string (URL or file path)
  roleid: Schema.Types.ObjectId; // Array of role ObjectIds
}
