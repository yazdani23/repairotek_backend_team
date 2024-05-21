import { Request, Response } from "express";

export interface IController<T> {
  create: (req: Request, res: Response) => Promise<Response>;
  update: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;

  getAll: (req: Request, res: Response) => Promise<Response>;
  getById: (req: Request, res: Response) => Promise<Response>;
  search: (req: Request, res: Response) => Promise<Response>;
  filter: (req: Request, res: Response) => Promise<Response>;
  getAllPaginated: (req: Request, res: Response) => Promise<Response>;
}

export type Controller<T> = IController<T>;
