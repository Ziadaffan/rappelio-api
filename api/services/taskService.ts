import { ITaskDocument } from "../db/models/task";

import { TaskRepository } from "../repositories/taskRepository";

export class TaskService {
  private static singleton: TaskService;

  private constructor() {}

  public static instance(): TaskService {
    if (!TaskService.singleton) {
      TaskService.singleton = new TaskService();
    }
    return TaskService.singleton;
  }

  public async findAll(userId: string): Promise<ITaskDocument[]> {
    return TaskRepository.instance().findAll(userId);
  }

  public async findById(id: string, userId: string): Promise<ITaskDocument> {
    const task = await TaskRepository.instance().findById(id, userId);

    if (!task) {
      throw new Error("Task not found");
    }

    return task;
  }

  public async create(task: ITaskDocument, userId: string): Promise<ITaskDocument> {
    const existingTask = await TaskRepository.instance().findDuplicateTaskForUser(task, userId);

    if (existingTask) {
      throw new Error("Task already exists");
    }

    return TaskRepository.instance().create(task, userId);
  }

  public async update(
    id: string,
    task: ITaskDocument,
    userId: string
  ): Promise<ITaskDocument | null> {
    const existingTask = await TaskRepository.instance().findById(id, userId);

    if (!existingTask) {
      throw new Error("Task not found");
    }

    const duplicateTask = await TaskRepository.instance().findDuplicateTaskForUser(task, userId);

    if (duplicateTask) {
      throw new Error("Task already exists");
    }

    return TaskRepository.instance().update(id, task, userId);
  }

  public async delete(id: string, userId: string): Promise<ITaskDocument | null> {
    const existingTask = await TaskRepository.instance().findById(id, userId);

    if (!existingTask) {
      throw new Error("Task not found");
    }

    return TaskRepository.instance().delete(id, userId);
  }
}
