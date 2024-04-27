import { model, Schema } from "mongoose";
import { DepartmentDoc } from "../../types/department";


const departmentSchema = new Schema<DepartmentDoc>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

departmentSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Department = model<DepartmentDoc>("Department", departmentSchema);



