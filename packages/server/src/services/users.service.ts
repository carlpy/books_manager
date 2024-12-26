import prisma from "../db/prisma";

/* 
--|| users endpoints
- all users (get)
- one user (get)
- create a user (post)
- update a user (put)
- delete a user (delete) 
*/

class UserServices {
  async getUsers() {
    try {
      return await prisma.users.findMany();
    } catch (e) {
      throw new Error("There's no users in the table users");
    }
  } 

}
