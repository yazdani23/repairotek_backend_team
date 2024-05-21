import { Document, Schema } from "mongoose";

export interface ReportDoc extends Document {
  title: string;
  description: string;
  reportDate: Date;
  projectGalleryId: [Schema.Types.ObjectId];
}
