import { Request, Response } from "express";
import { Service } from "../../interfaces/Service";

type ResourceData<T> = T;



const crudControllerGenerator = <T>(
  resourceName: string,
  service: Service<T>
) => {
  const baseName = resourceName.toLowerCase();

  class ResourceController {
    [x: string]: any;

    async getAll(req: Request, res: Response): Promise<Response> {
      try {
        const resources = await service.getAll();
        return res.status(200).json(resources);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An unknown error occurred" });
      }
    }
    async search(req: Request, res: Response): Promise<Response> {
      try {
        const searchQuery = req.params.query;
        const results = await service.search(searchQuery);
        return res.status(200).json(results);
      } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: "An unknown error occurred" });
      }
    }

    async filter(req: Request, res: Response): Promise<Response> {
      try {
        const filterCriteria = req.body;
        const filteredResults = await service.filter(filterCriteria);
        return res.status(200).json(filteredResults);
      } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: "An unknown error occurred" });
      }
    }

    async getAllPaginated(req: Request, res: Response): Promise<Response> {
      try {
        const limit = parseInt(req.params.limit, 10);
        const page = parseInt(req.params.page, 10);
        const sort = req.query.sort || undefined; // Optional sort parameter

        const { data: paginatedResults, total } = await service.getAllPaginated(
          limit,
          page
          // sort
        );
        return res.status(200).json({ data: paginatedResults, total });
      } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: "An unknown error occurred" });
      }
    }

    async getById(req: Request, res: Response): Promise<Response> {
      try {
        const id = req.params.id;
        const resource = await service.getById(id);
        if (!resource) {
          return res.status(404).json({ error: `${baseName} not found` });
        }
        return res.status(200).json(resource);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An unknown error occurred" });
      }
    }

    async create(req: Request, res: Response): Promise<Response> {
      try {
        const createData = req.body as ResourceData<T>;
        console.log(createData);

        const createdResource = await service.create(createData);
        return res.status(201).json(createdResource);
        // } catch (error) {
        //   console.error(error); // Log the error for debugging
        //   // return res.status(500).json({ error: "An unknown error occurred" });
        //    return res.status(500).json(error.message);
        // }
      } catch (error) {
        console.error(error + "1"); // Log the error for debugging
        let errorMessage = "An unknown error occurred";
        if (error instanceof Error && error.message) {
          errorMessage = "2 " + error.message;
        }
        return res.status(500).json({ error: errorMessage });
        console.error(errorMessage + "77"); // Log the error for debuggingole.error(req.bo); // Log the error for debugging
      }
    }

    async update(req: Request, res: Response): Promise<Response> {
      try {
        const id = req.params.id;
        const updatedData = req.body as ResourceData<T>;
        const updatedResource = await service.update(id, updatedData);
        if (!updatedResource) {
          return res.status(404).json({ error: `${baseName} not found` });
        }
        return res.status(200).json(updatedResource);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An unknown error occurred" });
      }
    }

    async delete(req: Request, res: Response): Promise<Response> {
      try {
        const id = req.params.id;
        await service.delete(id);
        return res.status(204).send(); // No content on successful deletion
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }

  return new ResourceController();
};

export default crudControllerGenerator;
