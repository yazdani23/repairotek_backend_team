import express, { Application } from "express";
import dotenv from "dotenv";
import connentDB from "../config/db";
import cors from "cors";
import indexRouter from "./routes/indexRouter";
import session from "express-session";


const app: Application = express();
dotenv.config();
console.log("Starting ");
connentDB();
app.use(cors());
app.use(express.json());

// app.get('/login', (req, res) => {
//   req.session.user = { id: 1, username: 'example' };
//   res.send('شما وارد شده‌اید.');
// });
// پیکربندی middleware session
const sessionMiddleware = session({
  secret: 'mysecretkey', // کلید مخفی برای رمزنگاری اطلاعات جلسات
  resave: false,
  saveUninitialized: false,
});

// اضافه کردن middleware session به برنامه
app.use(sessionMiddleware);

app.use("/api", indexRouter)



export default app;
