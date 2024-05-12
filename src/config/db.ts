import mongoose from "mongoose";
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/repairotek_db";
// console.log(process.env.DB_URL);

const connentDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default connentDB