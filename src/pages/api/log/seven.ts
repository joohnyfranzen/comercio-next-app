import Handler from "@/back/handler";
import { PrismaClient, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Seven extends Handler {
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
      const currentDate = new Date();
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(currentDate.getDate() - 7);

      const userProducts = await prisma.userProduct.findMany({
        where: {
          createdAt: {
            gt: sevenDaysAgo,
          },
          deleted: true,
        },
        include: {
          product: true,
        },
      });

      const totalQuantity = userProducts.length;
      const totalPrice = userProducts.reduce((total, userProduct) => {
        return total + userProduct.product.price;
      }, 0);

      console.log(userProducts);
      console.log("Total Quantity:", totalQuantity);
      console.log("Total Price:", totalPrice);

      return res.status(200).json({
        totalQuantity,
        totalPrice,
      });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default new Seven().handler;
