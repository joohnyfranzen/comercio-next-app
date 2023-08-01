import { Inventory } from "@/@types/Inventory";
import { Product } from "@/@types/Product";
import { UserProduct as ProductUser } from "@/@types/UserProduct";
import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class UserProduct extends Handler {
  private static prisma = new PrismaClient();
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { id, name, email, password, phoneNumber, address, userProducts } =
      req.body;
    console.log(id, name, email, password, phoneNumber, address, userProducts);

    try {
      let userId: string;

      const findUser = await UserProduct.prisma.user.findUnique({
        where: { id },
      });

      if (!findUser) {
        const newUser = await UserProduct.prisma.user.create({
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

      const userProduct = await UserProduct.prisma.userProduct.createMany({
        data: userProducts.map((userProduct: ProductUser) => {
          return {
            userId: userId,
            productId: userProduct.id,
          };
        }),
      });

      // Products that don't have inventory need to be soft deleted after selling
      const softDeleteProducts = await UserProduct.prisma.product.updateMany({
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
      const productsWithInventory = await UserProduct.prisma.product.findMany({
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

      const updateInventory = await UserProduct.prisma.inventory.updateMany({
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

      const productsWithZeroStock = await UserProduct.prisma.product.updateMany(
        {
          where: {
            inventory: {
              stock: {
                equals: 0,
              },
            },
          },
          data: { deleted: true },
        }
      );

      return res.status(200).json({ userProduct });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  async get(req: NextApiRequest, res: NextApiResponse) {
    try {
      const userProduct = await UserProduct.prisma.userProduct.findMany({
        where: { deleted: false },
        include: {
          user: true,
          product: true,
        },
      });

      return res.status(200).json(userProduct);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}
export default new UserProduct().handler;
