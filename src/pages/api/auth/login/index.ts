import { User } from "@/@types/User";
import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Login extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { email, password }: User = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email e Senha são necessários" });
    } else {
      try {
        if (
          email === process.env.ADMIN_EMAIL ||
          password === process.env.ADMIN_PASSWORD
        ) {
          return res.status(200).json({ admin: true });
        }
        const user = await prisma.user.findFirst({ where: { email } });
        return res.status(200).json({ user });
      } catch (err) {
        return res.status(400).json({ message: err });
      }
    }
  }
}
export default new Login().handler;
