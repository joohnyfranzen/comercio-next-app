import Handler from "@/back/handler";
import { PrismaClient, User as UserType } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface UserAddress {
  street: string;
  city: string;
}

interface UserData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: UserAddress;
}

class User extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { name, email, password, phoneNumber, address }: UserData = req.body;

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
          phoneNumber,
          address: {
            create: {
              street: address.street,
              city: address.city,
            },
          },
        },
        include: {
          address: true,
        },
      });

      return res.status(200).json(newUser);
    } catch (err) {
      return res.status(400).json({ message: err });
    } finally {
      await prisma.$disconnect();
    }
  }

  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
      const users = await prisma.user.findMany({
        include: {
          address: true,
        },
      });

      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ message: err });
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new User().handler;
