// Define the roles enum
const userRoles = ["ADMIN", "MODERATOR", "USER"] as const;
type UserRole = (typeof userRoles)[number];

interface UserDoc extends Document {
  username: string;
  email: string;
  password: string;
  term: boolean;
  role: UserRole;
}


export { userRoles, UserDoc };