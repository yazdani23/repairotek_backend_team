import { UserDoc } from "../../types/user";
import {User} from "../models/User";

class UserRepository {

  async createUser(userData: Partial<UserDoc>): Promise<UserDoc> {
    const user = new User(userData);
    return await user.save();
  }

  async getUserById(userId: string): Promise<UserDoc | null> {
    return await User.findById(userId).exec();
  }

  async updateUser(
    userId: string,
    userData: Partial<UserDoc>
  ): Promise<UserDoc | null> {
    return await User.findByIdAndUpdate(userId, userData, { new: true }).exec();
  }

  async deleteUser(userId: string): Promise<void> {
    await User.findByIdAndDelete(userId).exec();
  }

}

export default new UserRepository();
