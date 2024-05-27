import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import AdminModel from "../models/AdminModel";

export class AdminSeeder {
  
  static removeAllAdmins = async () => {
    try {
      await AdminModel.deleteMany({});
      logger.info("All admins removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove admins: " + error.message);
    }
  };

  static insertAdmins = async (batchSize = 10) => {
    try {
      const admins = [];

      for (let i = 0; i < batchSize; i++) {
        admins.push({

        });
      }

      await AdminModel.insertMany(admins);
      logger.info(batchSize + " admins seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed admins: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllAdmins();
    await this.insertAdmins();
  };
}
