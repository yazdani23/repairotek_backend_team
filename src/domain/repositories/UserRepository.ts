import UserModel from "../models/UserModel";
import { UserDoc } from "../docs/User";
import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository<UserDoc> {
  constructor() {
    super(UserModel);
  }
  async getById(id: string): Promise<UserDoc | null> {
    try {
      return await this.model
        .findById(id)
        .populate("roleId", "name") 
        .exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getAll(): Promise<UserDoc[]> {
    try {
      return await this.model.find().populate("roleId", "name").exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
}

export default new UserRepository();
