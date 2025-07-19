import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  gender?: string;
  photo?: string;
  username?: string;
  phone?: string;
  country?: string;
  address?: string;
  balance?: number;
  bankName?: string;
  accountNumber?: string;
  accountType?: string;
  role?: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String },
  photo: { type: String },
  username: { type: String },
  phone: { type: String },
  country: { type: String },
  address: { type: String },
  balance: { type: Number },
  bankName: { type: String },
  accountNumber: { type: String },
  accountType: { type: String },
  role: { type: String }
}, { timestamps: true });

export const User = mongoose.model<IUser>('User', UserSchema);
