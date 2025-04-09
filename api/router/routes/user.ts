import { Router } from "express";
import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  updatePassword,
} from "../../controllers/userController";
import { isAuth } from "../../middleware/isAuth";
import { validateApiKey } from "../../middleware/validateApiKey";

const router = Router();

router.get("/", validateApiKey, isAuth, getUsers);
router.get("/me", validateApiKey, isAuth, getUser);
router.put("/me", validateApiKey, isAuth, updateUser);
router.delete("/me", validateApiKey, isAuth, deleteUser);
router.patch("/me", validateApiKey, isAuth, updatePassword);

export const userRouter = router;
