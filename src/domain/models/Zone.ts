import { model, Schema } from "mongoose";
import { ZoneDoc } from "../../types/zone"


const zoneSchema = new Schema<ZoneDoc>(
  {
    name: { type: String, required: true },
    state: { type: String, required: true },
    roadWay: { type: String, required: true },
    ipAddress: { type: String, required: true },
    timeZone: { type: String, required: true }, //---- Todo Change type to String
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    description: { type: String },
    provinceId: [
      { type: Schema.Types.ObjectId, ref: "Province", required: true },
    ],
  },
  { timestamps: true }
);
//Todo maybe Change 
zoneSchema.virtual("users", {
  ref: "User",
  localField: "_id",
  foreignField: "zoneIds",
});
zoneSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Zone = model<ZoneDoc>("Zone", zoneSchema);




