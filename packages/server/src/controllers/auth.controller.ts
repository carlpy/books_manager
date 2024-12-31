import { Response, Request } from "express";
import AuthService from "../services/auth.service";
import { createJWT } from "../modules/auth";

type loginFields = { email: string; password: string };

class AuthController {
  async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body as loginFields;
      const { authResult, user } = await AuthService.authUser(email, password);

      if (!authResult) {
        res.status(401).json({ message: "Invalid Credentials" });
      }
      // if all's good
      const token = createJWT(user);
      console.log(authResult);

      res.json({
        message: "Login succesfully",
        token,
        user: {
          user_id: user.user_id,
          email: user.email,
        },
      });
    } catch (e) {
      throw new Error("Error in auth ");
    }
  }
}
/* Login kinda works, but you got to avoid backend crashing when writing out invalid credentials */
export default new AuthController();
