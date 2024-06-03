
import { TaskDoc } from "../docs/Task";
import TaskModel from "../models/TaskModel";
import BaseRepository from "./BaseRepository";

class TaskRepository extends BaseRepository<TaskDoc> {
  constructor(){
    super(TaskModel)
  }
}

export default new TaskRepository();
