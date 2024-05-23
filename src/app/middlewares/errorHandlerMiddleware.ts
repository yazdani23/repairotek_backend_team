import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import logger from "../../utils/helpers/logger"; // وارد کردن ماژول لاگر

const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // لاگ کردن خطا
  logger.error(err);

   const statusCode = (err as any).statusCode || 500;
   const message = err.message || "Internal Server Error";

  // اگر خطا نوعی http-error است، آن را به عنوان پاسخ برگردانید
  if (err instanceof createError.HttpError) {
    return res
      .status(err.statusCode)
      .json({ status: "error", statusCode, message });
  }

  // برای خطاهای دیگر، ارسال یک پاسخ خطای داخلی سرور
  return res.status(500).json({ status: "error", statusCode, message });
};

export default errorHandlerMiddleware;
