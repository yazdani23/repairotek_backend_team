import { Schema, model } from "mongoose";
import { TimeCardEmployeeDoc } from "../docs/TimeCardEmployee";

const TimeCardEmployeeSchema = new Schema<TimeCardEmployeeDoc>(
  {
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    timeCardDate: { type: Date, required: true },
    scheduledStartTime: { type: String, required: true },
    scheduledEndTime: { type: String, required: true },
    actualStartTime: { type: String, required: true },
    actualEndTime: { type: String, required: true },
    scheduledOverTime: { type: Number, required: true, default: 0 },
    actualOverTime: { type: Number, required: true, default: 0 },
    scheduledRestTime: { type: Number, required: true, default: 0 },
    actualRestTime: { type: Number, required: true, default: 0 },
    wageRate: { type: Number, required: true },
    overTimePayRate: { type: Number, required: true },
    taskId: {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: false,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

// Virtual function to calculate total scheduled work time
TimeCardEmployeeSchema.virtual("totalScheduledWorkTime").get(function (
  this: TimeCardEmployeeDoc
) {
  const start = new Date(this.scheduledStartTime).getTime();
  const end = new Date(this.scheduledEndTime).getTime();
  const workDuration = (end - start) / (1000 * 60); // work duration in minutes
  return workDuration - this.scheduledRestTime; // actual work time
});

// Virtual function to calculate total actual work time
TimeCardEmployeeSchema.virtual("totalActualWorkTime").get(function (
  this: TimeCardEmployeeDoc
) {
  const start = new Date(this.actualStartTime).getTime();
  const end = new Date(this.actualEndTime).getTime();
  const workDuration = (end - start) / (1000 * 60); // work duration in minutes
  return workDuration - this.actualRestTime; // actual work time
});

// Pre-save validation to ensure valid start and end times
TimeCardEmployeeSchema.pre<TimeCardEmployeeDoc>("save", function (next) {
  const scheduledStart = new Date(this.scheduledStartTime);
  const scheduledEnd = new Date(this.scheduledEndTime);
  const actualStart = new Date(this.actualStartTime);
  const actualEnd = new Date(this.actualEndTime);

  if (scheduledStart >= scheduledEnd || actualStart >= actualEnd) {
    return next(new Error("Start time cannot be after end time"));
  }
  next();
});

// Adding index to improve query performance
TimeCardEmployeeSchema.index(
  { employeeId: 1, timeCardDate: 1 },
  { unique: true }
);

const TimeCardEmployeeModel = model<TimeCardEmployeeDoc>(
  "TimeCardEmployee",
  TimeCardEmployeeSchema
);

export default TimeCardEmployeeModel;
