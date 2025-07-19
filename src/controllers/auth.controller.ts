import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      password,
      username,
      phone,
      gender,
      photo,
      country,
      address,
      balance,
      bankName,
      accountNumber,
      accountType,
      role
    } = req.body;

    const userData = {
      name,
      email,
      password,
      username,
      phone,
      gender,
      photo,
      country,
      address,
      accountType,
      role : "user",
      balance: 0
    };

    const user = await registerUser(userData);
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
