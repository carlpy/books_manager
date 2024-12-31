import { Request, Response } from "express";
import usersService from "../services/users.service";

// after creating all the services and controllers, make sure to handle the possible errors
class UserControllers {
  async getAllUsers(req: Request, res: Response) {
    const users = await usersService.getUsers();
    res.status(200).json(users);
  }

  async getUser(req: Request, res: Response) {
    const user = await usersService.getUser(req.body.email);
    res.status(200).json(user);
  }

  async createUser(req: Request, res: Response) {
    const createdUser = await usersService.createUser(req.body);
    res.status(200).json(createdUser);
  }

  async updateUser(req: Request, res: Response) {
    const updatedUser = await usersService.updateUser(req.body);
    res.status(200).json(updatedUser);
  }

  async deletedUser(req: Request, res: Response) {
    const deletedUser = await usersService.deleteUser(+req.params.id);
    res.status(200).json(deletedUser);
  }
}

export default new UserControllers();

// test the user's endpoints
