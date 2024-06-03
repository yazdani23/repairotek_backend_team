import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ResourceModel from "../models/ResourceModel";

export class ResourceSeeder {
  static removeAllResources = async () => {
    try {
      await ResourceModel.deleteMany({});
      logger.info("All resources removed successfully.");
    } catch (error: any) {
      logger.error(`Failed to remove resources: ${error.message}`);
    }
  };

  static insertResources = async (batchSize = 20) => {
    try {
      const resources = [
        { name: "Projects", description: "Description for Projects" },
        {
          name: "Daily Reports",
          description: "Description for Daily Reports",
        },
        {
          name: "Damage Equipment Reports",
          description: "Description for Damage Equipment Reports",
        },
        {
          name: "Injury Employee Reports",
          description: "Description for Injury Employee Reports",
        },
        { name: "Employees", description: "Description for Employees" },
        { name: "Equipments", description: "Description for Equipments" },
        { name: "Materials", description: "Description for Materials" },
        {
          name: "Project Gallery",
          description: "Description for Project Gallery",
        },
        { name: "Tasks", description: "Description for Tasks" },
        { name: "Time Card", description: "Description for Time Card" },
      ];

      await ResourceModel.insertMany(resources);
      logger.info(`${batchSize} resources seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed resources: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllResources();
    await this.insertResources();
  };
}
