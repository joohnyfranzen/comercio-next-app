import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Product extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { name, price, state } = req.body;

    try {
      const product = await prisma.product.create({
        data: {
          name,
          price: Number(price),
          state,
        },
      });
      return res.status(200).json({ product });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err });
    }
  }
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
      const product = await prisma.product.findMany();
      return res.status(200).json({ product });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new Product().handler;
