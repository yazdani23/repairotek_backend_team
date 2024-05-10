import { Schema } from "mongoose";
import { ZoneDoc } from "../docs/Zone";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ZoneModel = generateSchema<ZoneDoc>("Zone",
  {
    name: { type: String, required: true },
    state: { type: String, required: true },
    roadWay: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    description: { type: String },
    provinceId: { type: Schema.Types.ObjectId, ref: "Province", required: true }
  },
);
//Todo maybe Change
// zoneSchema.virtual("users", {
//   ref: "User",
//   localField: "_id",
//   foreignField: "zoneIds",
// });

 export default ZoneModel;
