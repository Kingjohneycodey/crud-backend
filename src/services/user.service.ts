import { User, IUser } from '../models/User';

export const getAllUsers = () => User.find();
