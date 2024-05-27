import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ProjectModel from "../models/ProjectModel";

export class ProjectSeeder {
  static removeAllProjects = async () => {
    try {
      await ProjectModel.deleteMany({});
      logger.info("All projects removed successfully.");
    } catch (error: any) {
      logger.error(`Failed to remove projects: ${error.message}`);
    }
  };

  static insertProjects = async (batchSize = 10) => {
    try {
      const projects = [];

      for (let i = 0; i < batchSize; i++) {
        projects.push({
          name: faker.person.firstName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        });
      }

      await ProjectModel.insertMany(projects);
      logger.info(`${batchSize} projects seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed projects: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllProjects();
    await this.insertProjects();
  };
}
