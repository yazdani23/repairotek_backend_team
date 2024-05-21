import express from "express";
import dotenv from "dotenv";
import connentDB from "../config/db";
import cors from "cors";
import indexRouter from "./routes/indexRouter";

const app = express();

dotenv.config();
console.log("Starting ");
connentDB();
app.use(cors());
app.use(express.json());
app.use("/api", indexRouter)



export default app;
