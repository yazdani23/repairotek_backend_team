import { model, Schema } from "mongoose";
import { ProjectEmployeeDoc } from "../../types/projectEmployee";

const projectEmployeeSchema = new Schema<ProjectEmployeeDoc>(
  {
    projectid: { type: Schema.Types.ObjectId, required: true },
    employeeid: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

projectEmployeeSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const ProjectEmployee = model<ProjectEmployeeDoc>("ProjectEmployee", projectEmployeeSchema);
