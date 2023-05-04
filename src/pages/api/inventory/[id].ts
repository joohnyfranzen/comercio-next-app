import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Inventory extends Handler {
  async put(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const { stock } = req.body;
    const prisma = new PrismaClient();
    try {
      const inventory = await prisma.inventory.update({
        where: { id: Number(id) },
        data: { stock: stock },
      });
      return res.status(200).json({ inventory });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const prisma = new PrismaClient();
    try {
      const inventory = await prisma.inventory.delete({
        where: { id: Number(id) },
      });
      return res.status(200).json({ inventory });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
