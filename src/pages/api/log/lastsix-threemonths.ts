import { Inventory } from "@/@types/Inventory";
import { Product } from "@/@types/Product";
import { UserProduct as ProductUser } from "@/@types/UserProduct";
import Handler from "@/back/handler";
import { PrismaClient, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Log extends Handler {
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
      const currentDate = new Date();
      const lastMonthEnd = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        0
      );
      const lastMonthStart = new Date(
        lastMonthEnd.getFullYear(),
        lastMonthEnd.getMonth(),
        1
      );

      const sixMonthsAgoEnd = new Date(
        lastMonthStart.getFullYear(),
        lastMonthStart.getMonth() - 6,
        0
      );
      const threeMonthsAgoEnd = new Date(
        lastMonthStart.getFullYear(),
        lastMonthStart.getMonth() - 3,
        0
      );
      const threeMonthsAgoStart = new Date(
        threeMonthsAgoEnd.getFullYear(),
        threeMonthsAgoEnd.getMonth(),
        1
      );

      const userProduct = await prisma.product.findMany({
        where: {
          deleted: true,
          createdAt: {
            gte: sixMonthsAgoEnd,
            lt: threeMonthsAgoStart,
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
