import prisma from "../db/prisma";
import { comparePasswords } from "../modules/password";

class AuthService {
  async authUser(email: string, password: string) {
    try {
      const user = await prisma.users.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return { user, authResult: await comparePasswords(password, user.password) };
    } catch (e) {
      throw new Error("User not found");
    }
  }

  async signUpUser() {}
}

export default new AuthService();
