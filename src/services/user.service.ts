import { User, IUser } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (name: string, email: string, password: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  const userObj = user.toObject() as Omit<IUser, 'password'> & { password?: string };
  delete userObj.password;
  return userObj;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: '7d'
  });

  const userObj = user.toObject() as Omit<IUser, 'password'> & { password?: string };
  delete userObj.password;
  return { token, user: userObj };
};

export const getAllUsers = () => User.find();
