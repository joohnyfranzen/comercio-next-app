import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Product extends Handler {
  async put(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const id = req.query.id;
    try {
      const product = await prisma.product.update({
        where: { id: String(id) },
        data: { deleted: false },
      });
      return res.status(200).json({ product });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const id = req.query.id;
    try {
      const product = await prisma.product.findFirst({
        where: { id: String(id) },
        include: { inventory: true },
      });
      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const id = req.query.id;
    try {
      const product = await prisma.product.delete({
        where: { id: String(id) },
        include: { inventory: true },
      });
      return res.status(200).json({ product });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new Product().handler;
