import { model, Schema } from "mongoose";
import { EmployeeDoc } from "../../types/employee";
import { date } from "joi";
import { Project } from "./Project";

const employeeSchema = new Schema<EmployeeDoc>(
  {
    employeecode: { type: Number, required: true },
    // projects: [type: Schema.Types.project, required: true],
    gender: { type: Schema.Types.String, required: true},
    firstname: { type: String, required: true },
     lastname: { type: String, required: true },
     telephone: { type: String, required: true },
      mobile: { type: String, required: true },
       email: { type: String, required: true },//todo check
        address: { type: String, required: true },
         profilephoto: { type: String, required: true },//todo check
         hiredate: { type: Date, required: true},
         jobid: {type:Schema.Types.ObjectId,ref:"Job",required:true},
           departmentid: {type:Schema.Types.ObjectId,ref:"Department",required:true},
    skilldescription: { type: String, required: true },
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
