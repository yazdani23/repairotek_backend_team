import { Repository } from "../../interfaces/Repository";
import { Model } from "mongoose";

type ResourceData<T> = T;

class BaseRepository<T> implements Repository<T> {
  protected readonly model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: ResourceData<T>): Promise<ResourceData<T>> {
    try {
      const newRecource = new this.model(data);
      await newRecource.save();
      return newRecource;
    } catch (error) {
      throw new Error(`Failed to create user: ${error}`);
    }
  }

  async getById(id: string): Promise<ResourceData<T> | null> {
    try {
      return await this.model.findById(id);
      //  .populate("zones");
    } catch (error) {
      throw new Error(`Failed to create user: ${error}`);
    }
  }

  async getAll(): Promise<ResourceData<T>[]> {
    try {
      return await this.model.find();
    } catch (error) {
      throw new Error(`Failed to create user: ${error}`);
    }
  }

  async update(
    id: string,
    data: Partial<ResourceData<T>>
  ): Promise<ResourceData<T> | null> {
    try {
      return await this.model.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error(`Failed to create user: ${error}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Failed to create user: ${error}`);
    }
  }

  async search(searchQuery: string) {
    const usersList = await this.model.find();
    return usersList;
  }
  async filter(filterCriteria: any) {
    const users = await this.model.find();
    return users;
  }
  async getAllPaginated(
    limit: number,
    page: number,
    sort?: string | undefined
  ) {
    const users = await this.model.find();
    return { data: users, total: 100 };
  }
}

export default BaseRepository;
