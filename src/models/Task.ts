import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  name: string;
  description: string;
  status: string;
  user: mongoose.Types.ObjectId;
}

const TaskSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'pending' },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export const Task = mongoose.model<ITask>('Task', TaskSchema);
