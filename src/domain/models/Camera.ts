import { model, Schema } from "mongoose";
import { CameraDoc } from "../../types/camera";


const cameraSchema = new Schema<CameraDoc>(
  {
    modelName: { type: String, required: true },
    cameraIp: { type: String, required: true },
    cameraSpecification: { type: String}
  },
  { timestamps: true }
);

cameraSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Camera = model<CameraDoc>("Camera", cameraSchema);



