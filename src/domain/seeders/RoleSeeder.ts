import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import RoleModel from "../models/RoleModel";
import { RoleNames } from "../../utils/constant/RoleNames";

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

      
       const roles = [];
       for (let i = 0; i < RoleNames.length; i++) {
         roles.push({
           name: RoleNames[i],
           description: faker.lorem.sentence(),
         });
       }

      await RoleModel.insertMany(roles);
      logger.info(`${RoleNames.length} roles seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed roles: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllRoles();
    await this.insertRoles();
  };
}
