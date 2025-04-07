import { Router } from "express";
import { dbRouter } from "./routes/db";
import { userRouter } from "./routes/user";
import { authRouter } from "./routes/auth";

const router = Router();

router.use("/db", dbRouter);  
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

export default router; 