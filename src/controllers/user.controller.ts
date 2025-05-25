import { Request, Response } from 'express';
import { registerUser, loginUser, getAllUsers } from '../services/user.service';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body.name, req.body.email, req.body.password);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result = await loginUser(req.body.email, req.body.password);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getUsers = async (_: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};
