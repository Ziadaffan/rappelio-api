import { Document, Types } from "mongoose";

export interface ITask extends Document {
  title: string;
  description?: string;
  due_date?: Date;
  completed: boolean;
  user_id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
