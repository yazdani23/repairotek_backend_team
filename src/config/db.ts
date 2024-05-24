import mongoose from "mongoose";
import logger from "../utils/helpers/logger";

const dbUrl =
  process.env.DB_URL_ATLAS || "mongodb://127.0.0.1:27017/repairotek_db";
//  "mongodb+srv://farahnaz:qGDLhyuczHGvBcTC@cluster0.9zpmenz.mongodb.net/repairoTek"
//  console.log("---------------" + process.env.DB_URL + "---------------");
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("MongoDB connection error:", error);
  }
};

export default connectDB;
