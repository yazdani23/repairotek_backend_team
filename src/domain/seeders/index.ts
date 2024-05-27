import mongoose from "mongoose";
import { UserSeeder } from "./UserSeeder";
import { ProjectSeeder } from "./ProjectSeeder";
import { RoleSeeder } from "./RoleSeeder";
import connectDB from "../../config/db";
import logger from "../../utils/helpers/logger";


const seedDatabase = async () => {
  try {
    await connectDB()

    await RoleSeeder.seed();
    await UserSeeder.seed();
    await ProjectSeeder.seed();
    

    logger.info("Database seeding completed successfully");
  } catch (error) {
    logger.error(`Error seeding database: ${error}`);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
