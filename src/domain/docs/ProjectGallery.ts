import { Document, Schema } from "mongoose";

export interface ProjectGalleryDoc extends Document {
  projectId: Schema.Types.ObjectId; 
  employeeId: Schema.Types.ObjectId; 
  media: string;
  mediaDateTime: string;
  mediaSubjectId: Schema.Types.ObjectId;
  location: string; 
  description: string;
}
