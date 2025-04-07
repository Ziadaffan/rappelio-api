import { Schema, model, Document } from "mongoose";
import { ITask } from "../types/task";

interface ITaskDocument extends ITask, Document {}

const taskSchema = new Schema<ITaskDocument>(
  {
    title: { type: String, required: true },
    description: { type: String },
    due_date: { type: Date },
    completed: { type: Boolean, default: false },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

taskSchema.index({ user_id: 1 });
taskSchema.index({ completed: 1 });
taskSchema.index({ due_date: 1 });
taskSchema.index({ user_id: 1, completed: 1, due_date: 1 });
taskSchema.index({ user_id: 1, completed: 1 });

export const Task = model<ITaskDocument>("Task", taskSchema);
