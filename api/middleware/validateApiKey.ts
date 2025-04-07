import { Request, Response, NextFunction } from "express";

export const validateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["x-api-key"];
  const validApiKey = process.env.API_KEY;

  if (!apiKey || apiKey !== validApiKey) {
    res.status(401).json({
      success: false,
      message: "Invalid or missing API key",
    });
    return;
  }

  next();
};
