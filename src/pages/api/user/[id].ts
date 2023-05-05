import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class User extends Handler {
  async put(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const updateBody = req.body;
    const id = req.query.id;

    try {
      const user = await prisma.user.update({
        where: { id: String(id) },
        data: updateBody,
      });
      return res.status(200).json({ user });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const id = req.query.id;
    try {
      const user = await prisma.user.findFirst({
        where: { id: String(id) },
      });
      return res.status(200).json({ user });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const id = req.query.id;
    try {
      const user = await prisma.user.delete({
        where: { id: String(id) },
      });
      return res.status(200).json({ user });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new User().handler;
