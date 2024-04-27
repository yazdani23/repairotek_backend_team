import { model, Schema } from "mongoose";
import { ProvinceDoc } from "../../types/province";

const provinceSchema = new Schema<ProvinceDoc>(
  {
    code: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

provinceSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Province = model<ProvinceDoc>("Province", provinceSchema);
