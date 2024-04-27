import { Request, Response } from "express";
import UserService from "../../services/UserService";

class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userData = req.body;
      const user = await UserService.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await UserService.updateUser(userId, userData);
      if (!updatedUser) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      await UserService.deleteUser(userId);
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }
}

export default new UserController();
