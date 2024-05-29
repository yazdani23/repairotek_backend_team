import mongoose from "mongoose";
import connectDB from "../../config/db";
import logger from "../../utils/helpers/logger";
import { ZoneSeeder } from "./ZoneSeeder";
import { CountrySeeder } from "./CountrySeeder";
import { ProvinceSeeder } from "./ProvinceSeeder";


const insertZone = async () => {
  try {
    await connectDB();

    await CountrySeeder.seed();
    await ProvinceSeeder.seed();
    await ZoneSeeder.seed();

    logger.info("Database seeding completed successfully");
  } catch (error) {
    logger.error(`Error seeding database: ${error}`);
  } finally {
    mongoose.connection.close();
  }
};

insertZone();
