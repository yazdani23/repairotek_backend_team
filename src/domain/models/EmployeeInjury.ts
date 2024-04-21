import { model, Schema } from "mongoose";
import { EmployeeInjuryDoc } from "../../types/employeeInjury"


const employeeInjurySchema = new Schema<EmployeeInjuryDoc>(
  {
    employeeId: { type: Schema.Types.ObjectId, required: true },
    injuryTypeId: { type: Schema.Types.ObjectId, required: true },
    injuryDateTime: { type: Date, required: true },
    insurance: { type: Boolean, required: true },
  },
  { timestamps: true }
);

employeeInjurySchema.set("toJSON", {
  transform: (doc, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj.__v;
    delete returnObj._id;
  },
});

export const EmployeeInjury = model<EmployeeInjuryDoc>("EmployeeInjury", employeeInjurySchema);




