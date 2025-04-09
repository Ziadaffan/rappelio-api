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
    console.log("[Auth Debug] Authorization header:", authHeader);
    
    if (!authHeader) {
      console.log("[Auth Debug] No Authorization header found");
      res.status(401).json({ message: "Not Authenticated" });
      return;
    }

    const token = authHeader.split(" ")[1];
    console.log("[Auth Debug] Token extracted:", token ? "Present" : "Missing");
    
    if (!process.env.JWT_SECRET) {
      console.error("[Auth Debug] JWT_SECRET is not defined!");
      res.status(500).json({ message: "Server configuration error" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };
    console.log("[Auth Debug] Token decoded successfully:", decoded);
    
    if (!decoded) {
      console.log("[Auth Debug] Token verification failed");
      res.status(401).json({ message: "Not Authenticated" });
      return;
    }

    req.userId = decoded.userId;
    next();
  } catch (error: any) {
    console.error("[Auth Debug] Authentication error:", error.message);
    if (error.name === 'TokenExpiredError') {
      res.status(401).json({ message: "Token expired" });
    } else if (error.name === 'JsonWebTokenError') {
      res.status(401).json({ message: "Invalid token" });
    } else {
      res.status(401).json({ message: "Not Authenticated" });
    }
    return;
  }
};
