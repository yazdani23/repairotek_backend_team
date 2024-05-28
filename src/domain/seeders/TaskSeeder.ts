import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import TaskModel from "../models/TaskModel";

export class TaskSeeder {
  
  static removeAllTasks = async () => {
    try {
      await TaskModel.deleteMany({});
      logger.info("All tasks removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove tasks: " + error.message);
    }
  };

  static insertTasks = async (batchSize = 10) => {
    try {
      const tasks = [];

      for (let i = 0; i < batchSize; i++) {
        tasks.push({

        });
      }

      await TaskModel.insertMany(tasks);
      logger.info(batchSize + " tasks seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed tasks: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllTasks();
    await this.insertTasks();
  };
}
