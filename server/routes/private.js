import express from "express";
import {
  deleteUser,
  getDashboardUsers,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/dashboard", getDashboardUsers);

router.delete("/delete", deleteUser);

export default router;
