import express from "express";
import connentDB from "../config/db";
const app = express();
import dotenv from "dotenv";
import indexRouter from "./routes/indexRouter";

app.use("/api", indexRouter)
dotenv.config();
connentDB();

export default app;
