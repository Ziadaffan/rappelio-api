import { Types } from "mongoose";
import { Task } from "../db/models/task";
import { ITaskDocument } from "../db/models/task";

export class TaskRepository {
  private static singleton: TaskRepository;

  private constructor() {}

  public static instance(): TaskRepository {
    if (!TaskRepository.singleton) {
      TaskRepository.singleton = new TaskRepository();
    }
    return TaskRepository.singleton;
  }

  public async findAll(userId: string): Promise<ITaskDocument[]> {
    return Task.find({ user_id: userId }).sort({
      createdAt: -1,
    });
  }

  public async findById(id: string, userId: string): Promise<ITaskDocument | null> {
    return Task.findOne({ _id: id, user_id: userId });
  }

  public async create(
    task: ITaskDocument,
    userId: string
  ): Promise<ITaskDocument> {
    return Task.create({ ...task, user_id: new Types.ObjectId(userId) });
  }

  public async update(
    id: string,
    task: ITaskDocument,
    userId: string
  ): Promise<ITaskDocument | null> {
    return Task.findByIdAndUpdate(id, { ...task, user_id: new Types.ObjectId(userId) }, { new: true });
  }

  public async delete(id: string, userId: string): Promise<ITaskDocument | null> {
    return Task.findByIdAndDelete(id, { user_id: new Types.ObjectId(userId) });
  }

  public async findDuplicateTaskForUser(task: ITaskDocument, userId: string): Promise<ITaskDocument | null> {
    return Task.findOne({
      user_id: new Types.ObjectId(userId),
      title: task.title,
      description: task.description,
      due_date: task.due_date,
    });
  }
}
