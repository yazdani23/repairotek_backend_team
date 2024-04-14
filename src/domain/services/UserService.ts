import { UserDoc } from "../../types/user";
import UserRepository from "../repositories/UserRepository";
import userSchema from "../validations/userValidation";

class UserServices {
  async createUser(userData: Partial<UserDoc>): Promise<UserDoc> {
    const validationResult = userSchema.validate(userData);

    if (validationResult.error) {
      throw new Error(validationResult.error.message);
    }
    return await UserRepository.createUser(userData);
  }

  async getUserById(userId: string): Promise<UserDoc | null> {
    return await UserRepository.getUserById(userId);
  }

  async updateUser(
    userId: string,
    userData: Partial<UserDoc>
  ): Promise<UserDoc | null> {
    return await UserRepository.updateUser(userId, userData);
  }

  async deleteUser(userId: string): Promise<void> {
    await UserRepository.deleteUser(userId);
  }
}

export default new UserServices();
