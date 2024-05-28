
import { TaskDoc } from "../docs/Task";
import BaseService from "./BaseService";
import TaskRepository from "../repositories/TaskRepository";
import TaskValidationSchema from "../validations/TaskValidation";

class TaskService extends BaseService<TaskDoc> {
  private taskRepository = this.repository as typeof TaskRepository;
  constructor() {
    super(TaskRepository, TaskValidationSchema);
  }
}
export default new TaskService();
