import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Product extends Handler {
  async put(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const updateBody = req.body;
    const id = req.query.id;

    try {
      const product = await prisma.product.update({
        where: { id: Number(id) },
        data: updateBody,
      });
      return res.status(200).json({ product });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const id = req.query.id;
    try {
      const product = await prisma.product.findFirst({
        where: { id: Number(id) },
      });
      return res.status(200).json({ product });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const id = req.query.id;
    try {
      const product = await prisma.product.delete({
        where: { id: Number(id) },
      });
      return res.status(200).json({ product });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new Product().handler;
