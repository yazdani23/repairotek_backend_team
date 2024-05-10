import express from "express";
import dotenv from "dotenv";
import connentDB from "../config/db";
import cors from "cors";
import indexRouter from "./routes/indexRouter";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.post("/api/data", (req, res) => {
//   // Handle the POST request here
//   const data = req.body;
//   // Send a response back to the client
//   res.status(200).json({ data: data, message: "Data received successfully" });
// });

app.use("/api", indexRouter)
connentDB();

// // API Starts Here
// app.get('/', async(req,res) => {
//     let body = req.body;
//     console.log('body is:' + body);
//     res.status(200).send(body)
// });

export default app;
