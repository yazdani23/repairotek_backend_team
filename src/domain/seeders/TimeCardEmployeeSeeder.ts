import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import TimeCardEmployeeModel from "../models/TimeCardEmployeeModel";

export class TimeCardEmployeeSeeder {
  
  static removeAllTimeCardEmployees = async () => {
    try {
      await TimeCardEmployeeModel.deleteMany({});
      logger.info("All timeCardEmployees removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove timeCardEmployees: " + error.message);
    }
  };

  static insertTimeCardEmployees = async (batchSize = 10) => {
    try {
      const timeCardEmployees = [];

      for (let i = 0; i < batchSize; i++) {
        timeCardEmployees.push({

        });
      }

      await TimeCardEmployeeModel.insertMany(timeCardEmployees);
      logger.info(batchSize + " timeCardEmployees seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed timeCardEmployees: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllTimeCardEmployees();
    await this.insertTimeCardEmployees();
  };
}
