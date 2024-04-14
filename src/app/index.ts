import express from "express";
import connentDB from "../config/db";
const app = express();
import dotenv from "dotenv";

dotenv.config();
connentDB();

export default app;
