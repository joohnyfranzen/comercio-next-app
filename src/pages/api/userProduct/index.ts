import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class UserProduct extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { userId, productId } = req.body;
    const prisma = new PrismaClient();
    try {
      const userProduct = await prisma.userProduct.create({
        data: {
          user: { connect: { id: userId } },
          product: { connect: { id: productId } },
        },
      });
      return res.status(200).json({ userProduct });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.body;
    const prisma = new PrismaClient();
    try {
      const userProduct = await prisma.userProduct.findMany({
        where: { userId: userId },
      });
      return res.status(200).json({ userProduct });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new UserProduct().handler;
