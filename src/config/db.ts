import mongoose from "mongoose";


console.log("Database connection");
const dbUrl = process.env.DB_URL_ATLAS as string;//  || "mongodb://127.0.0.1:27017/repairotek_db";
console.log(process.env.DB_URL);

const connectDB = async () => {
   try {
     await mongoose.connect(
       "mongodb+srv://farahnaz:qGDLhyuczHGvBcTC@cluster0.9zpmenz.mongodb.net"
     );
     console.log("---------------"+process.env.DB_URL+"---------------");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;

