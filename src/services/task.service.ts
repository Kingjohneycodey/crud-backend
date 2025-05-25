import { Task } from '../models/Task';

export const createTask = async (data: any) => Task.create(data);
export const getTasks = async (userId: string) => Task.find({ user: userId });
export const getTaskById = async (id: string) => Task.findById(id);
export const updateTask = async (id: string, data: any) => Task.findByIdAndUpdate(id, data, { new: true });
export const deleteTask = async (id: string) => Task.findByIdAndDelete(id);
