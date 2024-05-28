import { Schema } from "mongoose";
import { ZoneDoc } from "../docs/Zone";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ZoneModel = generateSchema<ZoneDoc>("Zone", {
  name: { type: String, required: true },
  roadWay: {
    type: new Schema({
      name: { type: String, required: true },
      status: {
        type: String,
        enum: ["good", "average", "poor"],
        required: true,
      },
      traffic: { type: String, enum: ["low", "medium", "high"] },
    }),
    required: true,
  },
  location: {
    type: new Schema({
      type: { type: String, default: "Point" },
      coordinates: { type: [Number], required: true },
    }),
    required: true,
  },
  description: { type: String },
  provinceId: { type: Schema.Types.ObjectId, ref: "Province", required: true },
});


 export default ZoneModel;
