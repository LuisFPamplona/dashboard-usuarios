import jwt from "jsonwebtoken";

const JWT_TOKEN = process.env.JWT_TOKEN;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_TOKEN);

    req.user = decoded;
  } catch (error) {
    return res.status(500).json({ message: "Invalid jwt" });
  }

  next();
};

export default verifyToken;
