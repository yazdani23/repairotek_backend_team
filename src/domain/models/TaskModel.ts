
import { TaskDoc } from "../docs/Task";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { TaskStatus } from "../../utils/constant/enums/StatusTask";

const TaskModel = generateSchema<TaskDoc>("Task", {
  title: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v: string) {
        return v.length > 0;
      },
      message: "Title cannot be empty",
    },
  },
  description: { type: String, default: "" },
  status: {
    type: String,
    enum: Object.values(TaskStatus),
    default: TaskStatus.Pending,
    required: true,
  },
});

export default TaskModel;

