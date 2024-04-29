import Joi from "joi";
import { Repository } from "../../interfaces/Repository";
import { Service } from "../../interfaces/Service";

// const createCrudService = <T>(
//   resourceName: string,
//   repository: Repository<T>,
//   validateSchema: Joi.ObjectSchema<T>
// ): Service<T> => {

//   class ResourceService implements Service<T> {
//     constructor(private readonly repository: Repository<T>) {}

//     async create(data: T): Promise<T> {
//       const validationResult = validateSchema.validate(data);

//       if (validationResult.error) {
//         throw new Error(validationResult.error.message);
//       }
//       try {
//         return await this.repository.create(data);
//       } catch (error) {
//         throw new Error(`Failed to create user: ${error}`);
//       }
//     }

//     async getById(id: string): Promise<T | null> {}

//     async getAll(): Promise<T[]> {
//       // ... existing logic from your UserService.getAll ...
//     }

//     async search(searchQuery: string): Promise<T[]> {
//       // Implement search logic using searchQuery based on your repository capabilities
//       // For example, call a search method on the repository if available
//       return []; // Replace with actual search results
//     }

//     async filter(filterCriteria: any): Promise<T[]> {
//       // Implement filtering logic using filterCriteria based on your repository capabilities
//       // For example, call a filter method on the repository if available
//       return []; // Replace with actual filtered results
//     }

//     async getAllPaginated(
//       limit: number,
//       page: number,
//       sort?: string
//     ): Promise<{ data: T[]; total: number }> {
//       // Implement pagination logic using limit, page, and sort based on your repository capabilities
//       // For example, call a pagination method on the repository if available
//       return { data: [], total: 0 }; // Replace with actual paginated results and total count
//     }

//     async update(id: string, data: Partial<T>): Promise<T | null> {
//       // ... existing logic from your UserService.update ...
//     }

//     async delete(id: string): Promise<void> {
//       // ... existing logic from your UserService.delete ...
//     }
//   }

//   return new ResourceService(repository);
// };

// export default createCrudService;
