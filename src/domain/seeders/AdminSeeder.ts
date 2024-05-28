import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import AdminModel from "../models/AdminModel";
import RoleModel from "../models/RoleModel";

export class AdminSeeder {
  
  static removeAllAdmins = async () => {
    try {
      await AdminModel.deleteMany({});
      logger.info("All admins removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove admins: " + error.message);
    }
  };

  static insertAdmins = async (batchSize = 1) => {
    try {
      const adminRole = await RoleModel.findOne({ name: "Admin" });
      const admins = [];

      for (let i = 0; i < batchSize; i++) {
        admins.push({
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          gender: faker.person.sex(),
          email: faker.internet.email(),
          address: faker.location.secondaryAddress(),
          telephone: faker.phone.number(),
          mobile: faker.phone.number(),
          profilePhoto: faker.image.avatar(),
          roleId: adminRole?.id,
          password: faker.internet.password(),
          lastActivity: faker.number.int(),
          nationalId: faker.number.int({ min: 1000000000, max: 9999999999 }), // Assuming national ID is a 10-digit number
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
