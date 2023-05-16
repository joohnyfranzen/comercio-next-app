import Handler from "@/back/handler";
import { PrismaClient, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Log extends Handler {
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
      const currentDate = new Date();
      const twentyOneDaysAgo = new Date();
      twentyOneDaysAgo.setDate(currentDate.getDate() - 21);

      const fourteenDaysAgo = new Date();
      fourteenDaysAgo.setDate(currentDate.getDate() - 14);

      const userProduct = await prisma.product.findMany({
        where: {
          deleted: true,
          createdAt: {
            gte: twentyOneDaysAgo,
            lt: fourteenDaysAgo,
          },
        },
      });

      console.log(userProduct);
      return res.status(200).json(userProduct);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default new Log().handler;
