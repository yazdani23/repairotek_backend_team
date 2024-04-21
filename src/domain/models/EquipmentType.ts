import { model, Schema } from "mongoose";
import { EquipmentTypeDoc } from "../../types/equipmentType";


const equipmentTypeSchema = new Schema<EquipmentTypeDoc>(
  {
    name: { type: String, required: true },
    equipmentModel: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

equipmentTypeSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const EquipmentType = model<EquipmentTypeDoc>("EquipmentType", equipmentTypeSchema);



