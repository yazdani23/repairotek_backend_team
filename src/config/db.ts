import mongoose from "mongoose";
import logger from "../utils/helpers/logger";

const connectDB = async () => {
  const dbUrl =
    process.env.DB_URL_DEV || "mongodb://127.0.0.1:27017/repairotek_db";

  try {
    const dbConnection = await mongoose.connect(dbUrl);
    logger.info(
      `Successfully connected to MongoDB. 
       Host: ${dbConnection.connection.host} 
       dbName: ${dbConnection.connection.db.databaseName}`
    );
  } catch (error) {
    logger.error("MongoDB connection error:", error);
  }
};

export default connectDB;
