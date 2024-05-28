import mongoose from "mongoose";
import { UserSeeder } from "./UserSeeder";
import { ProjectSeeder } from "./ProjectSeeder";
import { RoleSeeder } from "./RoleSeeder";
import connectDB from "../../config/db";
import logger from "../../utils/helpers/logger";
import { ResourceSeeder } from "./ResourceSeeder";
import { PermissionSeeder } from "./PermissionSeeder";
import { EquipmentSeeder } from "./EquipmentSeeder";
import { MaterialSeeder } from "./MaterialSeeder";
import { EmployeeSeeder } from "./EmployeeSeeder";
import { AdminSeeder } from "./AdminSeeder";
import { JobSeeder } from "./JobSeeder";
import { ZoneSeeder } from "./ZoneSeeder";


const seedDatabase = async () => {
  try {
    await connectDB()

    await RoleSeeder.seed();
    await ResourceSeeder.seed();
    await JobSeeder.seed();

    await EmployeeSeeder.seed();
    await AdminSeeder.seed();
    await PermissionSeeder.seed();

    // await ZoneSeeder.seed();
    await MaterialSeeder.seed();
    await EquipmentSeeder.seed();

    await ProjectSeeder.seed();
    

    logger.info("Database seeding completed successfully");
  } catch (error) {
    logger.error(`Error seeding database: ${error}`);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
