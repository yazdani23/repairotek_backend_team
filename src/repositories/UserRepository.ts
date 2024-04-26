import { UserDoc } from "../types/user";
import { User } from "../domain/models/User";
import { IRepository } from "../interfaces/repositories";


// class UserRepository {
  export class UserRepository implements IRepository<UserDoc> {
        
    async create(data: UserDoc): Promise<UserDoc> {
      const newUser = new User(data);
      await newUser.save();
      return newUser;
    }
  
    async getById(id: string): Promise<UserDoc | null> {
      // Populate zones using virtual field
      return await User.findById(id).populate("zones");
    }

    async getAll(): Promise<UserDoc[]> {
      return await User.find();
    }

    async update(id: string, data: Partial<UserDoc>): Promise<UserDoc | null> {
      return await User.findByIdAndUpdate(id, data, { new: true }); // Returns updated document
    }

    async delete(id: string): Promise<void> {
      await User.findByIdAndDelete(id);
    }
  }

export default new UserRepository();
