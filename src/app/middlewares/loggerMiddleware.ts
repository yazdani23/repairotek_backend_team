import { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import logger from "../../utils/helpers/logger";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // استفاده از Morgan برای لاگ‌گیری درخواست‌های HTTP
  morgan("combined", {
    stream: { write: (message) => logger.info(message.trim()) },
  })(req, res, (err) => {
    if (err) return next(err);
    next();
  });
};

export default loggerMiddleware;

// const pino = require("pino")({
//   level: process.env.NODE_ENV === "production" ? "info" : "debug",
//   prettyPrint: true,
//   colors: {
//     error: 0,
//     warn: 1,
//     info: 2,
//     debug: 3,
//   },
// });

// const loggerMiddleware2 = (req: Request, res: Response, next: NextFunction) => {
//   const stream = pino.destination({ sync: true });

//   const requestLog = {
//     method: req.method,
//     url: req.url,
//     headers: req.headers,
//     body: req.body,
//   };

//   // لاگ کردن درخواست در ترمینال
//   morgan(":method :url :status - :response-time ms", { stream })(
//     req,
//     res,
//     next
//   );

//   // لاگ کردن درخواست در فایل
//   logger.info("Request:", requestLog);

//   next();
// };