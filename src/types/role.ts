import { Document } from "mongoose";

export interface RoleDoc extends Document {
  name: string;
  roletype: string;
}
