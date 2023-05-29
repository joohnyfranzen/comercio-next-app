import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Address extends Handler {
  async put(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { id } = req.query;
    const update = req.body;
    try {
      const address = await prisma.address.update({
        where: { id: String(id) },
        data: update,
      });
      return res.status(200).json({ address });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { id } = req.query;
    try {
      const address = await prisma.address.findUnique({
        where: { id: String(id) },
      });
      return res.status(200).json({ address });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { id } = req.query;
    try {
      const address = await prisma.address.delete({
        where: { id: String(id) },
      });
      return res.status(200).json({ address });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new Address().handler;
