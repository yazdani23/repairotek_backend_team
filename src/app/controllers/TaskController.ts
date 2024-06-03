
import { TaskDoc } from "../../domain/docs/Task";
import TaskService from "../../domain/services/TaskService";
import BaseController from "./BaseController";

class TaskController extends BaseController<TaskDoc> {
  private taskService = this.service as typeof TaskService;
  constructor() {
    super(TaskService);
  }
}
export default new TaskController();
