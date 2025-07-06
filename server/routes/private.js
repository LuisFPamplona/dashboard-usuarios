import express from "express";
import { getDashboardUsers } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/dashboard", getDashboardUsers);

export default router;
