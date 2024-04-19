import { model, Schema } from "mongoose";
import { ZoneDoc } from "../../types/zone"


const zoneSchema = new Schema<ZoneDoc>(
  {
    name: { type: String, required: true },
    state: { type: String, required: true },
    roadway: { type: String, required: true },
    ipaddress: { type: String, required: true },
    timezone: { type: String, required: true }, //---- Todo Change type to String
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    description: { type: String },
    provinceid: [
      { type: Schema.Types.ObjectId, ref: "Province", required: true },
    ],
  },
  { timestamps: true }
);

zoneSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Zone = model<ZoneDoc>("Zone", zoneSchema);




