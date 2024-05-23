import { Document, Schema } from "mongoose";

export interface ProjectDoc extends Document {
  projectCode: string;
  userId: Schema.Types.ObjectId; 
  title: string;
  zoneId: Schema.Types.ObjectId; 
  issueDateTime: Date;
  areaLength: number; // Number of
  areaWidth: number; // Number of
  areaHeight: number; // Number of
  measureUnit: string; // String
  description: string;
  longitude: number;
  latitude: number;
  status: string; // Array of
  gallery:[],
  materials:[],
  equipments:[],
  employees:[],
  reports:[]
}
