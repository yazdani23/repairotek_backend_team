import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import RoleModel from "../models/RoleModel";

export class RoleSeeder {
 
  static removeAllRoles = async () => {
    try {
      await RoleModel.deleteMany({});
      logger.info("All roles removed successfully.");
    } catch (error: any) {
      logger.error(`Failed to remove roles: ${error.message}`);
    }
  };

  static insertRoles = async () => {
    try {
      const roleNames = [
        "Admin",
        "User",
        "Employee",
        "Editor",
        "Viewer",
        "Moderator",
        "Contributor",
        "Manager",
        "Operator",
        "Analyst",
        "Coordinator",
        "Consultant",
      ];

      const roles = Array.from({ length: roleNames.length }, () => ({
        name: faker.helpers.arrayElement(roleNames),
        description: faker.lorem.sentence(),
      }));

      await RoleModel.insertMany(roles);
      logger.info(`${roleNames.length} roles seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed roles: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllRoles();
    await this.insertRoles();
  };
}
