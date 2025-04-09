import { Router } from "express";
import { dbRouter } from "./routes/db";
import { userRouter } from "./routes/user";
import { authRouter } from "./routes/auth";
import { validateApiKey } from "../middleware/validateApiKey";

const router = Router();

router.use("/db", validateApiKey, dbRouter);
router.use("/user", validateApiKey, userRouter);
router.use("/auth", authRouter);
router.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

export default router;
