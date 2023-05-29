import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Image extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { imageUrl, imageName, id } = req.body;
    console.log(req.body);

    const image = await prisma.image.create({
      data: {
        imageUrl,
        imageName,
        product: { connect: { id: id } },
      },
    });
    console.log(image);
    return res.status(200).json({ image });
  }
}
export default new Image().handler;
