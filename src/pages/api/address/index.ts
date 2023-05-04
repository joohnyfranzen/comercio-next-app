import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Address extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { street, city, userId } = req.body;
    try {
      const address = await prisma.address.create({
        data: {
          street,
          city,
          userId,
        },
      });
      if (address) {
        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: {
            address: {
              connect: { id: address.id },
            },
          },
        });

        return res.status(200).json({ updatedUser });
      }
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
      const address = await prisma.address.findMany();
      return res.status(200).json({ address });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new Address().handler;
