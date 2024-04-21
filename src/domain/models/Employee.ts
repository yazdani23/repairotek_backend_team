import { model, Schema } from "mongoose";
import { EmployeeDoc } from "../../types/employee";
import { date } from "joi";
import { Project } from "./Project";

const employeeSchema = new Schema<EmployeeDoc>(
  {
    employeeCode: { type: Number, required: true },
    // projects: [type: Schema.Types.project, required: true],
    gender: { type: Schema.Types.String, required: true},
    firstName: { type: String, required: true },
     lastName: { type: String, required: true },
     telephone: { type: String, required: true },
      mobile: { type: String, required: true },
       email: { type: String, required: true },//todo check
        address: { type: String, required: true },
         profilePhoto: { type: String, required: true },//todo check
         hireDate: { type: Date, required: true},
         jobId: {type:Schema.Types.ObjectId,ref:"Job",required:true},
           departmentId: {type:Schema.Types.ObjectId,ref:"Department",required:true},
    skillDescription: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

employeeSchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const Employee = model<EmployeeDoc>("Employee", employeeSchema);
