import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  userId?: string;
}

export const isAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.get("Authorization");
    console.log("authHeader", authHeader);
    if (!authHeader) {
      res.status(401).json({ message: "Not Authenticated" });
      return;
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as { userId: string };
    console.log("decoded", decoded);
    if (!decoded) {
      res.status(401).json({ message: "Not Authenticated" });
      return;
    }

    req.userId = decoded.userId;
    next();
  } catch (error: any) {
    console.error("Auth error:", error);
    res.status(401).json({ message: "Not Authenticated" });
    return;
  }
};
