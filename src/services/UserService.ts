import { UserDoc } from "../types/user";
import { UserRepository } from "../repositories/UserRepository";
import userSchema from "../domain/validations/userValidation";
import { IGenericService } from "../interfaces/services";

class UserService implements IGenericService<UserDoc> {
  private readonly userRepository: UserRepository;

  // Inject the UserRepository instance into the UserService
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async create(userData: UserDoc): Promise<UserDoc> {
    const validationResult = userSchema.validate(userData);

    if (validationResult.error) {
      throw new Error(validationResult.error.message);
    }
    try {
      return await this.userRepository.create(userData);
    } catch (error) {
      // Database operation error
      throw new Error(`Failed to create user: ${error}`);
    }
  }

  async getById(userId: string): Promise<UserDoc | null> {
    try {
      return await this.userRepository.getById(userId);
    } catch (error) {
      throw new Error(`Failed to get user by ID: ${error}`);
    }
  }

  async getAll(): Promise<UserDoc[]> {
    try {
      return await this.userRepository.getAll();
    } catch (error) {
      throw new Error(`Failed to get all users: ${error}`);
    }
  }

  async update(
    userId: string,
    userData: Partial<UserDoc>
  ): Promise<UserDoc | null> {
    try {
      return await this.userRepository.update(userId, userData);
    } catch (error) {
      throw new Error(`Failed to update user: ${error}`);
    }
  }

  async delete(userId: string): Promise<void> {
    try {
      await this.userRepository.delete(userId);
    } catch (error) {
      throw new Error(`Failed to delete user: ${error}`);
    }
  }
}

export default new UserService(new UserRepository()); // Dependency injection
