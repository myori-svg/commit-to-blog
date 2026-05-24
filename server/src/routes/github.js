import { Router } from "express";
import { getRepositories } from "../controllers/githubController.js";

const router = Router();

router.get("/repos", getRepositories);

export default router;
