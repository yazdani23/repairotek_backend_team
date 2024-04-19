import { Document, Schema } from "mongoose";

export interface ProjectGalleryDoc extends Document {
  projectid: Schema.Types.ObjectId; 
  employeeid: Schema.Types.ObjectId; 
  media: string;
  mediadatetime: string;
  mediasubjectid: Schema.Types.ObjectId;
  location: string; 
  description: string;
}
