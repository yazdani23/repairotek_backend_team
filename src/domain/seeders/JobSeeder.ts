import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import JobModel from "../models/JobModel";

export class JobSeeder {
  static removeAllJobs = async () => {
    try {
      await JobModel.deleteMany({});
      logger.info("All jobs removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove jobs: " + error.message);
    }
  };

  static insertJobs = async (batchSize = 15) => {
    try {
      const roadConstructionJobs = [
        "Civil Engineer",
        "Construction Manager",
        "Surveyor",
        "Heavy Equipment Operator",
        "Paving Technician",
        "Construction Laborer",
        "Safety Manager",
        "Materials Engineer",
        "Environmental Engineer",
        "Transportation Engineer",
        "Construction Worker",
        "Road Maintenance Worker",
        "Equipment Operator Assistant",
        "Laborer",
        "Construction Technician",
      ];

      const jobs = [];

      for (let i = 0; i < batchSize; i++) {
        jobs.push({
          title: roadConstructionJobs[i],
          description: faker.lorem.paragraph(),
        });
      }

      await JobModel.insertMany(jobs);
      logger.info(`${batchSize} jobs seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed jobs: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllJobs();
    await this.insertJobs();
  };
}
