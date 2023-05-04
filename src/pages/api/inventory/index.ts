import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Inventory extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { productId, stock } = req.body;
    const prisma = new PrismaClient();
    try {
      const inventory = await prisma.inventory.create({
        data: {
          product: { connect: { id: productId } },
          stock: stock,
        },
      });
      return res.status(200).json({ inventory });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new Inventory().handler;
