import { UserDoc } from "../types/user";

export interface IGenericService<T> {
  create(data: T): Promise<T>;
  getById(id: string): Promise<T | null>;
  getAll(): Promise<T[]>; // Optional if needed
  update(id: string, data: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<void>;
}
export interface UserService extends IGenericService<UserDoc> {}
