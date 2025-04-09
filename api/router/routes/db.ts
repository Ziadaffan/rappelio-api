import { Router } from "express";
import { seed } from "../../controllers/dbController";
const router = Router();

router.get("/seed", seed);

export const dbRouter = router;
