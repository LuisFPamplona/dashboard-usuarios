import express from "express";
import { loginUser } from "../controllers/userControllers.js";
import { registerUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

export default router;
