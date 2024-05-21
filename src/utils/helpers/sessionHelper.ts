// import session from "express-session";
// import { UserDoc } from "../../domain/docs/User";


// const onlineUsers = new Map<string, UserDoc>();

// export const sessionMiddleware = session({
//   secret: "your-secret-key",
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 },
// });

// export const trackUserActivity = (req: any, res: any, next: any) => {
//   const userId = req.session.userId;
//   if (userId) {
//     const now = Date.now();
//     const existingUser = onlineUsers.get(userId);

//     if (existingUser) {
//       existingUser.lastActivity = now;
//     } else {
//       const user = { id: userId, username: `user${userId}` };
//       onlineUsers.set(userId, { ...user, lastActivity: now });
//     }
//   }
//   next();
// };

// export const getOnlineUsers = (): UserDoc[] => {
//   const now = Date.now();
//   const activeUsers: UserDoc[] = [];

//   onlineUsers.forEach((user, userId) => {
//     if (now - user.lastActivity < 60000) {
//       activeUsers.push({ id: user.id, username: user.username });
//     } else {
//       onlineUsers.delete(userId);
//     }
//   });

//   return activeUsers;
// };

