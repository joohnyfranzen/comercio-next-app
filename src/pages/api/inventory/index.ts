import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Inventory extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { productId, stock } = req.body;
    const prisma = new PrismaClient();

    const inventory = await prisma.inventory.create({
      data: {
        productId: String(productId),
        stock: Number(stock),
      },
    });
    return res.status(200).json({ inventory });
  }
}
export default new Inventory().handler;
