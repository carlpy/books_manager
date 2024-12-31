import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Users } from "@prisma/client";

const JWT_SECRET = process.env.SECRET || "salty-salt";

export function createJWT(data: Users) {
  const { email, password } = data;
  return jwt.sign({ email, password }, JWT_SECRET, {expiresIn: '1h'});
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "No provided token" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req["user"] = user;
    next();
  });
}
