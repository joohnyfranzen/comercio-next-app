import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class UserProduct extends Handler {
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const prisma = new PrismaClient();
    try {
      const userProduct = await prisma.userProduct.delete({
        where: { id: Number(id) },
      });
      return res.status(200).json({ userProduct });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new UserProduct().handler;
