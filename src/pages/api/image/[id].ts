import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Image extends Handler {
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const prisma = new PrismaClient();
    try {
      const deleteImage = await prisma.image.delete({
        where: { id: String(id) },
      });
      return res.status(200).json({ deleteImage });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default new Image().handler;
