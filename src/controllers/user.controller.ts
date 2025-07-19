import { Request, Response } from 'express';
import { getAllUsers } from '../services/user.service';

export const getUsers = async (_: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};
