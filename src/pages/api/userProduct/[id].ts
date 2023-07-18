import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import user from "../user";

class UserProduct extends Handler {
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const prisma = new PrismaClient();

    const userProduct = await prisma.user.findFirst({
      where: { id: String(id) },
      include: {
        address: true,
        userProducts: {
          include: {
            product: true,
          },
          where: {
            deleted: false,
          },
        },
      },
    });
    return res.status(200).json(userProduct);
  }
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const prisma = new PrismaClient();
    try {
      const userProduct = await prisma.userProduct.deleteMany({
        where: { userId: String(id) },
      });
      return res.status(200).json({ userProduct });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async put(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const prisma = new PrismaClient();
    console.log(id);
    try {
      const userProduct = await prisma.userProduct.updateMany({
        where: { userId: String(id) },
        data: { deleted: true },
      });
      console.log(userProduct);
      return res.status(200).json({ userProduct });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new UserProduct().handler;
