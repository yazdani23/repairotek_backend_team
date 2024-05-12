import express from "express";
import connentDB from "../config/db";
import dotenv from "dotenv";
import indexRouter from "./routes/indexRouter";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api", indexRouter)
dotenv.config();
connentDB();

export default app;
