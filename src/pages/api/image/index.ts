import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Image extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { imageUrl, imageName, productId } = req.body;
    try {
      const image = await prisma.image.create({
        data: {
          imageUrl,
          imageName,
          product: { connect: { id: productId } },
        },
      });

      return res.status(200).json({ image });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new Image().handler;
