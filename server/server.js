import express from "express";
import publicRouter from "./routes/public.js";
import privateRouter from "./routes/private.js";
import verifyToken from "./middlewares/auth.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const port = 3333;

app.use("/public", publicRouter);
app.use("/private", verifyToken, privateRouter);

app.listen(port, () =>
  console.log(`Server running at http://localhost:3333/ `)
);
