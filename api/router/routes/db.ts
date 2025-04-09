import { Router } from "express";
import { seed } from "../../controllers/dbController";
import { validateApiKey } from "../../middleware/validateApiKey";

const router = Router();

router.get("/seed", validateApiKey, seed);

export const dbRouter = router;
