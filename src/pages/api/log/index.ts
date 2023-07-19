import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

class Log extends Handler {
  async get(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
      const userProducts = await prisma.userProduct.findMany({
        include: {
          product: true,
        },
      });
      // Todos os produtos vendidos
      const totalQuantity = userProducts.length;
      const totalPrice = userProducts.reduce((total, userProduct) => {
        return total + userProduct.product.price;
      }, 0);
      // Produtos Novos
      const filteredNewProducts = userProducts.filter((userProduct) => {
        return userProduct.product.state === "novo";
      });
      const totalNewQuantity = filteredNewProducts.length;
      const totalNewPrice = filteredNewProducts.reduce((total, userProduct) => {
        return total + userProduct.product.price;
      }, 0);
      // Produtos Usados
      const filteredUsedProducts = userProducts.filter((userProduct) => {
        return userProduct.product.state === "usado";
      });
      const totalUsedQuantity = filteredUsedProducts.length;
      const totalUsedPrice = filteredUsedProducts.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );
      // Todos os produtos vendidos nos últimos seis meses
      const today = new Date(); // Data atual
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6); // Data há seis meses atrás
      const filteredProductsSixMonthsAgo = userProducts.filter(
        (userProduct) => {
          const createdAt = userProduct.createdAt
            ? new Date(userProduct.createdAt)
            : null;
          return createdAt && createdAt >= sixMonthsAgo && createdAt <= today;
        }
      );
      // Todos os produtos vendidos
      const totalQuantitySixMonthsAgo = filteredProductsSixMonthsAgo.length;
      const totalPriceSixMonthsAgo = filteredProductsSixMonthsAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );
      // Produtos Novos
      const filteredNewProductsSixMonthsAgo =
        filteredProductsSixMonthsAgo.filter((userProduct) => {
          return userProduct.product.state === "novo";
        });
      const totalNewQuantitySixMonthsAgo = filteredNewProducts.length;
      const totalNewPriceSixMonthsAgo = filteredNewProducts.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );
      // Produtos Usados
      const filteredUsedProductsSixMonthsAgo =
        filteredProductsSixMonthsAgo.filter((userProduct) => {
          return userProduct.product.state === "usado";
        });
      const totalUsedQuantitySixMonthsAgo = filteredUsedProducts.length;
      const totalUsedPriceSixMonthsAgo = filteredUsedProducts.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );
      // Todos os produtos vendidos nos últimos três meses
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3); // Data há três meses atrás
      const filteredProductsThreeMonthsAgo = userProducts.filter(
        (userProduct) => {
          const createdAt = userProduct.createdAt
            ? new Date(userProduct.createdAt)
            : null;
          return createdAt && createdAt >= threeMonthsAgo && createdAt <= today;
        }
      );

      const totalQuantityThreeMonthsAgo = filteredProductsThreeMonthsAgo.length;
      const totalPriceThreeMonthsAgo = filteredProductsThreeMonthsAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Novos
      const filteredNewProductsThreeMonthsAgo =
        filteredProductsThreeMonthsAgo.filter((userProduct) => {
          return userProduct.product.state === "novo";
        });
      const totalNewQuantityThreeMonthsAgo =
        filteredNewProductsThreeMonthsAgo.length;
      const totalNewPriceThreeMonthsAgo =
        filteredNewProductsThreeMonthsAgo.reduce((total, userProduct) => {
          return total + userProduct.product.price;
        }, 0);

      // Produtos Usados
      const filteredUsedProductsThreeMonthsAgo =
        filteredProductsThreeMonthsAgo.filter((userProduct) => {
          return userProduct.product.state === "usado";
        });
      const totalUsedQuantityThreeMonthsAgo =
        filteredUsedProductsThreeMonthsAgo.length;
      const totalUsedPriceThreeMonthsAgo =
        filteredUsedProductsThreeMonthsAgo.reduce((total, userProduct) => {
          return total + userProduct.product.price;
        }, 0);

      // Todos os produtos vendidos nos últimos dois meses
      const twoMonthsAgo = new Date();
      twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2); // Data há dois meses atrás
      const filteredProductsTwoMonthsAgo = userProducts.filter(
        (userProduct) => {
          const createdAt = userProduct.createdAt
            ? new Date(userProduct.createdAt)
            : null;
          return createdAt && createdAt >= twoMonthsAgo && createdAt <= today;
        }
      );

      const totalQuantityTwoMonthsAgo = filteredProductsTwoMonthsAgo.length;
      const totalPriceTwoMonthsAgo = filteredProductsTwoMonthsAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Novos
      const filteredNewProductsTwoMonthsAgo =
        filteredProductsTwoMonthsAgo.filter((userProduct) => {
          return userProduct.product.state === "novo";
        });
      const totalNewQuantityTwoMonthsAgo =
        filteredNewProductsTwoMonthsAgo.length;
      const totalNewPriceTwoMonthsAgo = filteredNewProductsTwoMonthsAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Usados
      const filteredUsedProductsTwoMonthsAgo =
        filteredProductsTwoMonthsAgo.filter((userProduct) => {
          return userProduct.product.state === "usado";
        });
      const totalUsedQuantityTwoMonthsAgo =
        filteredUsedProductsTwoMonthsAgo.length;
      const totalUsedPriceTwoMonthsAgo =
        filteredUsedProductsTwoMonthsAgo.reduce((total, userProduct) => {
          return total + userProduct.product.price;
        }, 0);

      // Todos os produtos vendidos nos últimos mes
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1); // Data há um mês atrás
      const filteredProductsOneMonthAgo = userProducts.filter((userProduct) => {
        const createdAt = userProduct.createdAt
          ? new Date(userProduct.createdAt)
          : null;
        return createdAt && createdAt >= oneMonthAgo && createdAt <= today;
      });

      const totalQuantityOneMonthAgo = filteredProductsOneMonthAgo.length;
      const totalPriceOneMonthAgo = filteredProductsOneMonthAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Novos
      const filteredNewProductsOneMonthAgo = filteredProductsOneMonthAgo.filter(
        (userProduct) => {
          return userProduct.product.state === "novo";
        }
      );
      const totalNewQuantityOneMonthAgo = filteredNewProductsOneMonthAgo.length;
      const totalNewPriceOneMonthAgo = filteredNewProductsOneMonthAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Usados
      const filteredUsedProductsOneMonthAgo =
        filteredProductsOneMonthAgo.filter((userProduct) => {
          return userProduct.product.state === "usado";
        });
      const totalUsedQuantityOneMonthAgo =
        filteredUsedProductsOneMonthAgo.length;
      const totalUsedPriceOneMonthAgo = filteredUsedProductsOneMonthAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Todos os produtos vendidos nas ultimas 3 semanas
      const threeWeeksAgo = new Date();
      threeWeeksAgo.setDate(threeWeeksAgo.getDate() - 21); // Data há três semanas atrás
      const filteredProductsThreeWeeksAgo = userProducts.filter(
        (userProduct) => {
          const createdAt = userProduct.createdAt
            ? new Date(userProduct.createdAt)
            : null;
          return createdAt && createdAt >= threeWeeksAgo && createdAt <= today;
        }
      );

      const totalQuantityThreeWeeksAgo = filteredProductsThreeWeeksAgo.length;
      const totalPriceThreeWeeksAgo = filteredProductsThreeWeeksAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Novos
      const filteredNewProductsThreeWeeksAgo =
        filteredProductsThreeWeeksAgo.filter((userProduct) => {
          return userProduct.product.state === "novo";
        });
      const totalNewQuantityThreeWeeksAgo =
        filteredNewProductsThreeWeeksAgo.length;
      const totalNewPriceThreeWeeksAgo =
        filteredNewProductsThreeWeeksAgo.reduce((total, userProduct) => {
          return total + userProduct.product.price;
        }, 0);

      // Produtos Usados
      const filteredUsedProductsThreeWeeksAgo =
        filteredProductsThreeWeeksAgo.filter((userProduct) => {
          return userProduct.product.state === "usado";
        });
      const totalUsedQuantityThreeWeeksAgo =
        filteredUsedProductsThreeWeeksAgo.length;
      const totalUsedPriceThreeWeeksAgo =
        filteredUsedProductsThreeWeeksAgo.reduce((total, userProduct) => {
          return total + userProduct.product.price;
        }, 0);

      // Todos os produtos vendidos nas ultimas 2 semanas
      const twoWeeksAgo = new Date();
      twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14); // Data há duas semanas atrás
      const filteredProductsTwoWeeksAgo = userProducts.filter((userProduct) => {
        const createdAt = userProduct.createdAt
          ? new Date(userProduct.createdAt)
          : null;
        return createdAt && createdAt >= twoWeeksAgo && createdAt <= today;
      });

      const totalQuantityTwoWeeksAgo = filteredProductsTwoWeeksAgo.length;
      const totalPriceTwoWeeksAgo = filteredProductsTwoWeeksAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Novos
      const filteredNewProductsTwoWeeksAgo = filteredProductsTwoWeeksAgo.filter(
        (userProduct) => {
          return userProduct.product.state === "novo";
        }
      );
      const totalNewQuantityTwoWeeksAgo = filteredNewProductsTwoWeeksAgo.length;
      const totalNewPriceTwoWeeksAgo = filteredNewProductsTwoWeeksAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Usados
      const filteredUsedProductsTwoWeeksAgo =
        filteredProductsTwoWeeksAgo.filter((userProduct) => {
          return userProduct.product.state === "usado";
        });
      const totalUsedQuantityTwoWeeksAgo =
        filteredUsedProductsTwoWeeksAgo.length;
      const totalUsedPriceTwoWeeksAgo = filteredUsedProductsTwoWeeksAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Todos os produtos vendidos nas ultima semana
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // Data há uma semana atrás
      const filteredProductsOneWeekAgo = userProducts.filter((userProduct) => {
        const createdAt = userProduct.createdAt
          ? new Date(userProduct.createdAt)
          : null;
        return createdAt && createdAt >= oneWeekAgo && createdAt <= today;
      });

      const totalQuantityOneWeekAgo = filteredProductsOneWeekAgo.length;
      const totalPriceOneWeekAgo = filteredProductsOneWeekAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Novos
      const filteredNewProductsOneWeekAgo = filteredProductsOneWeekAgo.filter(
        (userProduct) => {
          return userProduct.product.state === "novo";
        }
      );
      const totalNewQuantityOneWeekAgo = filteredNewProductsOneWeekAgo.length;
      const totalNewPriceOneWeekAgo = filteredNewProductsOneWeekAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Usados
      const filteredUsedProductsOneWeekAgo = filteredProductsOneWeekAgo.filter(
        (userProduct) => {
          return userProduct.product.state === "usado";
        }
      );
      const totalUsedQuantityOneWeekAgo = filteredUsedProductsOneWeekAgo.length;
      const totalUsedPriceOneWeekAgo = filteredUsedProductsOneWeekAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Todos os produtos vendidos nos ultimos três dias

      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3); // Data há três dias atrás
      const filteredProductsThreeDaysAgo = userProducts.filter(
        (userProduct) => {
          const createdAt = userProduct.createdAt
            ? new Date(userProduct.createdAt)
            : null;
          return createdAt && createdAt >= threeDaysAgo && createdAt <= today;
        }
      );

      const totalQuantityThreeDaysAgo = filteredProductsThreeDaysAgo.length;
      const totalPriceThreeDaysAgo = filteredProductsThreeDaysAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Novos
      const filteredNewProductsThreeDaysAgo =
        filteredProductsThreeDaysAgo.filter((userProduct) => {
          return userProduct.product.state === "novo";
        });
      const totalNewQuantityThreeDaysAgo =
        filteredNewProductsThreeDaysAgo.length;
      const totalNewPriceThreeDaysAgo = filteredNewProductsThreeDaysAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Usados
      const filteredUsedProductsThreeDaysAgo =
        filteredProductsThreeDaysAgo.filter((userProduct) => {
          return userProduct.product.state === "usado";
        });
      const totalUsedQuantityThreeDaysAgo =
        filteredUsedProductsThreeDaysAgo.length;
      const totalUsedPriceThreeDaysAgo =
        filteredUsedProductsThreeDaysAgo.reduce((total, userProduct) => {
          return total + userProduct.product.price;
        }, 0);

      // Todos os produtos vendidos nos ultimos dois dias
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2); // Data há dois dias atrás
      const filteredProductsTwoDaysAgo = userProducts.filter((userProduct) => {
        const createdAt = userProduct.createdAt
          ? new Date(userProduct.createdAt)
          : null;
        return createdAt && createdAt >= twoDaysAgo && createdAt <= today;
      });

      const totalQuantityTwoDaysAgo = filteredProductsTwoDaysAgo.length;
      const totalPriceTwoDaysAgo = filteredProductsTwoDaysAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Novos
      const filteredNewProductsTwoDaysAgo = filteredProductsTwoDaysAgo.filter(
        (userProduct) => {
          return userProduct.product.state === "novo";
        }
      );
      const totalNewQuantityTwoDaysAgo = filteredNewProductsTwoDaysAgo.length;
      const totalNewPriceTwoDaysAgo = filteredNewProductsTwoDaysAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Usados
      const filteredUsedProductsTwoDaysAgo = filteredProductsTwoDaysAgo.filter(
        (userProduct) => {
          return userProduct.product.state === "usado";
        }
      );
      const totalUsedQuantityTwoDaysAgo = filteredUsedProductsTwoDaysAgo.length;
      const totalUsedPriceTwoDaysAgo = filteredUsedProductsTwoDaysAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Todos os produtos vendidos nos ultimos dia

      const oneDayAgo = new Date();
      oneDayAgo.setDate(oneDayAgo.getDate() - 1); // Data há um dia atrás
      const filteredProductsOneDayAgo = userProducts.filter((userProduct) => {
        const createdAt = userProduct.createdAt
          ? new Date(userProduct.createdAt)
          : null;
        return createdAt && createdAt >= oneDayAgo && createdAt <= today;
      });

      const totalQuantityOneDayAgo = filteredProductsOneDayAgo.length;
      const totalPriceOneDayAgo = filteredProductsOneDayAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Novos
      const filteredNewProductsOneDayAgo = filteredProductsOneDayAgo.filter(
        (userProduct) => {
          return userProduct.product.state === "novo";
        }
      );
      const totalNewQuantityOneDayAgo = filteredNewProductsOneDayAgo.length;
      const totalNewPriceOneDayAgo = filteredNewProductsOneDayAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      // Produtos Usados
      const filteredUsedProductsOneDayAgo = filteredProductsOneDayAgo.filter(
        (userProduct) => {
          return userProduct.product.state === "usado";
        }
      );
      const totalUsedQuantityOneDayAgo = filteredUsedProductsOneDayAgo.length;
      const totalUsedPriceOneDayAgo = filteredUsedProductsOneDayAgo.reduce(
        (total, userProduct) => {
          return total + userProduct.product.price;
        },
        0
      );

      return res.status(200).json({
        totalQuantity,
        totalPrice,
        totalNewQuantity,
        totalNewPrice,
        totalUsedQuantity,
        totalUsedPrice,

        totalQuantitySixMonthsAgo,
        totalPriceSixMonthsAgo,
        totalNewQuantitySixMonthsAgo,
        totalNewPriceSixMonthsAgo,
        totalUsedQuantitySixMonthsAgo,
        totalUsedPriceSixMonthsAgo,

        totalQuantityThreeMonthsAgo,
        totalPriceThreeMonthsAgo,
        totalNewQuantityThreeMonthsAgo,
        totalNewPriceThreeMonthsAgo,
        totalUsedQuantityThreeMonthsAgo,
        totalUsedPriceThreeMonthsAgo,

        totalQuantityTwoMonthsAgo,
        totalPriceTwoMonthsAgo,
        totalNewQuantityTwoMonthsAgo,
        totalNewPriceTwoMonthsAgo,
        totalUsedQuantityTwoMonthsAgo,
        totalUsedPriceTwoMonthsAgo,

        totalQuantityOneMonthAgo,
        totalPriceOneMonthAgo,
        totalNewQuantityOneMonthAgo,
        totalNewPriceOneMonthAgo,
        totalUsedQuantityOneMonthAgo,
        totalUsedPriceOneMonthAgo,

        totalQuantityThreeWeeksAgo,
        totalPriceThreeWeeksAgo,
        totalNewQuantityThreeWeeksAgo,
        totalNewPriceThreeWeeksAgo,
        totalUsedQuantityThreeWeeksAgo,
        totalUsedPriceThreeWeeksAgo,

        totalQuantityTwoWeeksAgo,
        totalPriceTwoWeeksAgo,
        totalNewQuantityTwoWeeksAgo,
        totalNewPriceTwoWeeksAgo,
        totalUsedQuantityTwoWeeksAgo,
        totalUsedPriceTwoWeeksAgo,

        totalQuantityOneWeekAgo,
        totalPriceOneWeekAgo,
        totalNewQuantityOneWeekAgo,
        totalNewPriceOneWeekAgo,
        totalUsedQuantityOneWeekAgo,
        totalUsedPriceOneWeekAgo,

        totalQuantityThreeDaysAgo,
        totalPriceThreeDaysAgo,
        totalNewQuantityThreeDaysAgo,
        totalNewPriceThreeDaysAgo,
        totalUsedQuantityThreeDaysAgo,
        totalUsedPriceThreeDaysAgo,

        totalQuantityTwoDaysAgo,
        totalPriceTwoDaysAgo,
        totalNewQuantityTwoDaysAgo,
        totalNewPriceTwoDaysAgo,
        totalUsedQuantityTwoDaysAgo,
        totalUsedPriceTwoDaysAgo,

        totalQuantityOneDayAgo,
        totalPriceOneDayAgo,
        totalNewQuantityOneDayAgo,
        totalNewPriceOneDayAgo,
        totalUsedQuantityOneDayAgo,
        totalUsedPriceOneDayAgo,
      });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default new Log().handler;
