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
      console.log("////////////////////////////");
      
      console.log(newRecource);
      await newRecource.save();
      return newRecource;
    } catch (error) {
      throw new Error(`Failed to create data: ${error}`);
    }
  }

  async getById(id: string): Promise<ResourceData<T> | null> {
    try {
      return await this.model.findById(id);
      //  .populate("zones");
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  async getAll(): Promise<ResourceData<T>[]> {
    try {
      return await this.model.find();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  async update(
    id: string,
    data: Partial<ResourceData<T>>
  ): Promise<ResourceData<T> | null> {
    try {
      return await this.model.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error(`Failed to update data: ${error}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Failed to delete data: ${error}`);
    }
  }

  async search(searchQuery: string) {
    const results  = await this.model.find();
    return results ;
  }
  async filter(filterCriteria: any) {
    const results  = await this.model.find();
    return results ;
  }
  async getAllPaginated(
    limit: number,
    page: number,
    sort?: string | undefined
  ) {
    const results  = await this.model.find();
    return { data: results , total: 100 };
  }
}

export default BaseRepository;
