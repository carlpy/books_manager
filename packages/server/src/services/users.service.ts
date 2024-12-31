import prisma from "../db/prisma";
import { Users } from "@prisma/client";
import { hashPassword } from "../modules/password";
import { createJWT } from "../modules/auth";

class UserServices {
  async getUsers() {
    try {
      return await prisma.users.findMany();
    } catch (e) {
      throw new Error("There's no users in the table users");
    }
  }

  async getUser(email: string) {
    try {
      return await prisma.users.findFirst({
        where: {
          email,
        },
      });
    } catch (e) {
      throw new Error("There's no user with that email");
    }
  }

  // pending for jwt creation
  async createUser(data: Users) {
    try {
      const user = await prisma.users.create({
        data: {
          ...data,
          password: await hashPassword(data.password),
        },
      });

      const token = createJWT(data);
      return { user, token };
    } catch (e) {
      throw new Error("There was a problem creating the user");
    }
  }

  async updateUser(data: Users) {
    try {
      return await prisma.users.update({
        where: {
          user_id: data.user_id,
        },
        data: {
					...data, 
					password: await hashPassword(data.password)
				},
      });
    } catch (e) {
      throw new Error("There was a problem updating the user");
    }
  }

  async deleteUser(userId: number) {
    try {
      return await prisma.users.delete({
        where: {
          user_id: userId,
        },
      });
    } catch (e) {
      throw new Error("There was a problem updating your user");
    }
  }
}

export default new UserServices();
