import { NextFunction, Request, Response } from "express";
import { User } from "../db/models/user";
import { Task } from "../db/models/task";
import { users } from "../db/seeds/user";
import { tasks } from "../db/seeds/task";

interface SeedResult {
  users: any[];
  tasks: any[];
}

export const seed = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const result: SeedResult = {
    users: [],
    tasks: [],
  };

  try {
    await Promise.all([User.deleteMany(), Task.deleteMany()]);

    const [usersInserted, tasksInserted] = await Promise.all([
      User.insertMany(users),
      Task.insertMany(tasks),
    ]);

    if (usersInserted.length > 0) {
      result.users = usersInserted;
    }

    if (tasksInserted.length > 0) {
      result.tasks = tasksInserted;
    }

    res.status(200).json(result);
  } catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
