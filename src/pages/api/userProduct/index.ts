import { Inventory } from "@/@types/Inventory";
import { Product } from "@/@types/Product";
import { UserProduct as ProductUser } from "@/@types/UserProduct";
import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class UserProduct extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { name, email, password, phoneNumber, address, userProducts } =
      req.body;
    var userId: String;
    try {
      const findUser = await prisma.user.findUnique({
        where: { email },
      });
      if (!findUser) {
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
        userId = newUser.id;
      } else {
        userId = findUser.id;
      }
      const userProduct = await prisma.userProduct.createMany({
        data: userProducts.map((userProduct: ProductUser) => {
          return {
            userId: userId,
            productId: userProduct.id,
          };
        }),
      });
      // Products that don´t have inventory need to be soft deleted after selling
      const softDeleteProducts = await prisma.product.updateMany({
        where: {
          id: {
            in: userProducts.map((product: Product) => product.id),
          },
          inventory: null,
        },
        data: {
          deleted: true,
        },
      });

      // Products that have inventory need to be updated
      const productsWithInventory = await prisma.product.findMany({
        where: {
          id: {
            in: userProducts.map((product: Product) => product.id),
          },
          inventory: { NOT: undefined },
        },
        include: {
          inventory: true,
        },
      });

      const productsWithInventoryAndStock = productsWithInventory.filter(
        (product) => product.inventory?.stock ?? 0 > 0
      );

      const updateInventory = await prisma.inventory.updateMany({
        where: {
          productId: {
            in: productsWithInventoryAndStock.map((product) => product.id),
          },
        },
        data: {
          stock: {
            decrement: 1,
          },
        },
      });

      const productsWithZeroStock = await prisma.product.updateMany({
        where: {
          inventory: {
            stock: {
              equals: 0,
            },
          },
        },
        data: { deleted: true },
      });

      return res.status(200).json({ userProduct });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
      const userProduct = await prisma.user.findMany({
        include: {
          userProducts: {
            include: {
              product: true,
            },
            where: {
              deleted: false,
            },
          },
        },
      });
      return res.status(200).json(userProduct);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new UserProduct().handler;
