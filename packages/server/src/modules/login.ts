import { Request, Response } from "express";
import prisma from "../db/prisma";
import { createJWT } from "./auth";
import bcrypt from "bcrypt";

// this will be in another folder
export async function loginHandler(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;

  try {
    const user = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // if all's good
    const token = createJWT(user);

    res.json({
      message: "Login succesfully",
      token,
      user: {
        user_id: user.user_id,
        email: user.email,
      },
    });
  } catch (e) {
    throw new Error("Server Error");
  }
}
