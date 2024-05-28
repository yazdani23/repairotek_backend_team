import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import DailyReportModel from "../models/DailyReportModel";

export class DailyReportSeeder {
  
  static removeAllDailyReports = async () => {
    try {
      await DailyReportModel.deleteMany({});
      logger.info("All dailyReports removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove dailyReports: " + error.message);
    }
  };

  static insertDailyReports = async (batchSize = 10) => {
    try {
      const dailyReports = [];

      for (let i = 0; i < batchSize; i++) {
        dailyReports.push({

        });
      }

      await DailyReportModel.insertMany(dailyReports);
      logger.info(batchSize + " dailyReports seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed dailyReports: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllDailyReports();
    await this.insertDailyReports();
  };
}
