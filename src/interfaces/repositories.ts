import { UserDoc } from "../types/user";

export interface IRepository<T> {
  create(data: T): Promise<T>;
  getById(id: string): Promise<T | null>;
  getAll(): Promise<T[]>;
  update(id: string, data: Partial<T>): Promise<T | null>; // Partial<T> allows updating some properties
  delete(id: string): Promise<void>;
}

export interface UserRepository extends IRepository<UserDoc> {}

// export interface ProductRepository extends IRepository<Product> {}

// Add other repository interfaces for your data models

export type RepositoryType<T> = T extends object ? IRepository<T> : never; // Utility type for repository type safety
