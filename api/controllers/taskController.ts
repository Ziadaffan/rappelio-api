import { NextFunction, Response } from "express";
import { TaskService } from "../services/taskService";
import { AuthRequest } from "../middleware/isAuth";
import { mapToTaskDTO, mapToTaskDTOs } from "../dtos/taskDto";

export const getTasks = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.userId as string;
    const tasks = await TaskService.instance().findAll(userId);
    const taskDTOs = mapToTaskDTOs(tasks);
    res.status(200).json(taskDTOs);
    return;
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id;
    const userId = req.userId as string;
    const task = await TaskService.instance().findById(id, userId);

    const taskDTO = mapToTaskDTO(task);

    res.status(200).json(taskDTO);
    return;
  } catch (error) {
    if (error instanceof Error && error.message === "Task not found") {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    next(error);
  }
};

export const createTask = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.userId as string;
    const body = req.body;

    await TaskService.instance().create(body, userId);

    res.status(201).json({ message: "Task created successfully" });
    return;
  } catch (error) {
    if (error instanceof Error && error.message === "Task already exists") {
      res.status(400).json({ message: "Task already exists" });
      return;
    }
    next(error);
  }
};

export const updateTask = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.userId as string;
    const id = req.params.id;
    const body = req.body;

    await TaskService.instance().update(id, body, userId);

    res.status(200).json({ message: "Task updated successfully" });
    return;
  } catch (error) {
    if (error instanceof Error && error.message === "Task not found") {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    if (error instanceof Error && error.message === "Task already exists") {
      res.status(400).json({ message: "Task already exists" });
      return;
    }
    next(error);
  }
};

export const deleteTask = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.userId as string;
    const id = req.params.id;

    await TaskService.instance().delete(id, userId);

    res.status(200).json({ message: "Task deleted successfully" });
    return;
  } catch (error) {
    if (error instanceof Error && error.message === "Task not found") {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    next(error);
  }
};
