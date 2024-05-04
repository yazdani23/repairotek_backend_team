import express from "express";
import dotenv from "dotenv";
import connentDB from "../config/db";
import indexRouter from "./routes/indexRouter";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", indexRouter)
connentDB();

export default app;
