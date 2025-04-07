import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/authService";

export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.instance().login(email, password);

    if (!result) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await AuthService.instance().register(req.body);
    
    if (!result.success) {
      res.status(400).json({ message: result.message });
      return;
    }

    res.status(201).json({ message: result.message });
  } catch (error: any) {
    next(error);
  }
};
