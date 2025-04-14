import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/userService";
import { AuthRequest } from "../middleware/isAuth";
import { mapToUserDTO, mapToUserDTOs } from "../dtos/userDto";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await UserService.instance().findAll();

    if (!users) {
      res.status(404).json({ message: "No users found" });
      return;
    }
    const userDTOs = mapToUserDTOs(users);
    res.status(200).json(userDTOs);
  } catch (error: any) {
    console.error("Error fetching users:", error);
    next(error);
  }
};

export const getUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.userId as string;
    const user = await UserService.instance().findById(id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const userDTO = mapToUserDTO(user);

    res.status(200).json(userDTO);
  } catch (error: any) {
    console.error("Error fetching user:", error);
    next(error);
  }
};

export const updateUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.userId as string;
    const body = req.body;
    const user = await UserService.instance().update(id, body);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error: any) {
    console.error("Error updating user:", error);
    next(error);
  }
};

export const deleteUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.userId as string;
    const user = await UserService.instance().delete(id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting user:", error);
    next(error);
  }
};

export const updatePassword = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.userId as string;
    const { password } = req.body;
    const user = await UserService.instance().updatePassword(id, password);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error: any) {
    console.error("Error updating password:", error);
    next(error);
  }
};
