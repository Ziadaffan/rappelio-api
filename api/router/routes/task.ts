import { Router } from "express";
import { isAuth } from "../../middleware/isAuth";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../../controllers/taskController";

const router = Router();

router.get("/", isAuth, getTasks);
router.get("/:id", isAuth, getTaskById);
router.post("/", isAuth, createTask);
router.put("/:id", isAuth, updateTask);
router.delete("/:id", isAuth, deleteTask);

export const taskRouter = router;
