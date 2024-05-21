import { Document, Schema } from "mongoose";

export interface ProjectCostDoc extends Document {
  projectId: Schema.Types.ObjectId;
  materialId: Schema.Types.ObjectId;
  costDate: Date;
  unitCount: number;
  unitCost: number;
  totalCost: number;
  costRegistrantId : Schema.Types.ObjectId;
  costRegistrantType:string;
  docs:[ImageData];//docs for cost that were scaned
}
