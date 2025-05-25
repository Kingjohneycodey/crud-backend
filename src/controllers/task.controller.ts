import { Request, Response } from 'express';
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from '../services/task.service';
import { AuthRequest } from '../middlewares/auth';

export const create = async (req: AuthRequest, res: Response) => {
  try {
    const task = await createTask({ ...req.body, user: req.user.id });
    res.status(201).json(task);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getAll = async (req: AuthRequest, res: Response) => {
  const tasks = await getTasks(req.user.id);
  res.json(tasks);
};

export const getOne = async (req: AuthRequest, res: Response): Promise<void> => {
  const task = await getTaskById(req.params.id);
  if (!task) {
    res.status(404).json({ message: 'Task not found' });
    return;
  }
  res.json(task);
};

export const update = async (req: Request, res: Response) => {
  const task = await updateTask(req.params.id, req.body);
  res.json(task);
};

export const remove = async (req: Request, res: Response) => {
  await deleteTask(req.params.id);
  res.status(204).send();
};
