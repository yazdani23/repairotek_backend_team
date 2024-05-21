// // تعریف یک رابط برای داده‌های جلسه
// interface SessionData {
//   user: any; // شما می‌توانید یک نوع مشخص‌تر برای داده‌های کاربر تعیین کنید اگر نیاز دارید
// }

// گسترش ماژول express-session برای اضافه کردن رابط داده‌های جلسه جدید
// declare module "express-session" {
//   interface Session {
//     user: SessionData;
//   }
// }

// declare module "express-session" {
//   interface SessionStore {
//     sessions: { [key: string]: string };
//   //   secret: string; // کلید مخفی برای رمزنگاری اطلاعات جلسات
//   //   resave: boolean;
//   //   saveUninitialized: boolean;
//   }
// }

