import { Router } from "express";
import { getUser, getUsers, updateUser, deleteUser, updatePassword } from "../../controllers/userController";
import { isAuth } from "../../middleware/isAuth";

const router = Router();

router.get("/", isAuth, getUsers);
router.get("/me", isAuth, getUser);
router.put("/me", isAuth, updateUser);
router.delete("/me", isAuth, deleteUser);
router.patch("/me", isAuth, updatePassword);

export const userRouter = router;
