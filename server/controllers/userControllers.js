import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_TOKEN = process.env.JWT_TOKEN;

export const getDashboardUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error at get users" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const userInfo = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: userInfo.email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(userInfo.password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    if (!JWT_TOKEN) {
      console.warn("JWT_TOKEN not defined");
    }

    const token = jwt.sign({ id: user.id }, JWT_TOKEN, { expiresIn: "1h" });

    res.status(200).json({
      token: token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error at login" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    const dbUser = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassword,
      },
    });

    res.status(201).json({ message: "User registered" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error at register" });
  }
};
