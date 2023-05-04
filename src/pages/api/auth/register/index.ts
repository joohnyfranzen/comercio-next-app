import Handler from "@/back/handler";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { User } from "@/@types/User";

class Register extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { email, password }: User = req.body;
    const prisma = new PrismaClient();
    if (!email || !password)
      return res.status(400).send("Credenciais inválidas");
    try {
      const verifyIfUserExists = await prisma.user.findFirst({
        where: { email: email },
      });
      if (!verifyIfUserExists) {
        const newUser = await prisma.user.create({
          data: { email: email, password: password },
        });
        return res.status(200).send(newUser as User);
      } else {
        return res.status(400).send("Credenciais em uso");
      }
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}
export default new Register().handler;
