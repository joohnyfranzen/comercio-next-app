import { UserProduct } from "@/@types/UserProduct";
import Handler from "@/back/handler";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import ProductFilter6and5MonthsAgo from "./filters/month";
import ProductFilter from "./filters/month";
import ProductQuantity from "./filters/quantity";
import ProductPriceCalculator from "./filters/price";
import ProductFilterByState from "./filters/state";
import WeekProductFilter from "./filters/week";
import DayProductFilter from "./filters/day";

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
      // Todos os produtos vendidos nos últimos seis meses
      // POR MES
      // Quantity
      const productStats = new ProductQuantity();

      // Price
      const productPriceCalculator = new ProductPriceCalculator();

      // 6 And 5 Months Ago Filter
      const productFilter6And5MonthsAgo = new ProductFilter(5, 6);
      const filteredProductsBetween6And5MonthsAgo =
        productFilter6And5MonthsAgo.filterBetweenMonthsAgo(userProducts);
      // 6 And 5 Months Ago Totals
      const totalQuantityBetween6And5MonthsAgo = productStats.getTotalQuantity(
        filteredProductsBetween6And5MonthsAgo
      );
      const totalPriceBetween6And5MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween6And5MonthsAgo
        );

      //  5 And 4 Months Ago Filter
      const productFilter5And4MonthsAgo = new ProductFilter(4, 5);
      const filteredProductsBetween5And4MonthsAgo =
        productFilter5And4MonthsAgo.filterBetweenMonthsAgo(userProducts);
      //   5 And 4 Months Ago Totals
      const totalQuantityBetween5And4MonthsAgo = productStats.getTotalQuantity(
        filteredProductsBetween5And4MonthsAgo
      );
      const totalPriceBetween5And4MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween5And4MonthsAgo
        );

      //  4 And 3 Months Ago Filter
      const productFilter4And3MonthsAgo = new ProductFilter(4, 3);
      const filteredProductsBetween4And3MonthsAgo =
        productFilter4And3MonthsAgo.filterBetweenMonthsAgo(userProducts);
      //   4 And 3 Months Ago Totals
      const totalQuantityBetween4And3MonthsAgo = productStats.getTotalQuantity(
        filteredProductsBetween4And3MonthsAgo
      );
      const totalPriceBetween4And3MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween4And3MonthsAgo
        );

      //  3 And 2 Months Ago Filter
      const productFilter3And2MonthsAgo = new ProductFilter(3, 2);
      const filteredProductsBetween3And2MonthsAgo =
        productFilter3And2MonthsAgo.filterBetweenMonthsAgo(userProducts);
      //  3 And 2 Months Ago Totals
      const totalQuantityBetween3And2MonthsAgo = productStats.getTotalQuantity(
        filteredProductsBetween3And2MonthsAgo
      );
      const totalPriceBetween3And2MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween3And2MonthsAgo
        );

      //  2 And 1 Months Ago Filter
      const productFilter2And1MonthsAgo = new ProductFilter(2, 1);
      const filteredProductsBetween2And1MonthsAgo =
        productFilter2And1MonthsAgo.filterBetweenMonthsAgo(userProducts);
      //  2 And 1 Months Ago Totals
      const totalQuantityBetween2And1MonthsAgo = productStats.getTotalQuantity(
        filteredProductsBetween2And1MonthsAgo
      );
      const totalPriceBetween2And1MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween2And1MonthsAgo
        );

      //  1 And 0 Months Ago Filter
      const productFilter1And0MonthsAgo = new ProductFilter(1, 0);
      const filteredProductsBetween1And0MonthsAgo =
        productFilter1And0MonthsAgo.filterBetweenMonthsAgo(userProducts);
      //  1 And 0 Months Ago Totals
      const totalQuantityBetween1And0MonthsAgo = productStats.getTotalQuantity(
        filteredProductsBetween1And0MonthsAgo
      );
      const totalPriceBetween1And0MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween1And0MonthsAgo
        );

      // Novos
      const productFilterByState = new ProductFilterByState();
      const filteredNew = productFilterByState.filterByState(
        userProducts,
        "novo"
      );
      // 6 And 5 Months Ago Filter
      const productFilterNew6And5MonthsAgo = new ProductFilter(5, 6);
      const filteredProductsBetweenNew6And5MonthsAgo =
        productFilterNew6And5MonthsAgo.filterBetweenMonthsAgo(filteredNew);
      // 6 And 5 Months Ago Totals
      const totalQuantityBetweenNew6And5MonthsAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew6And5MonthsAgo);
      const totalPriceBetweenNew6And5MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew6And5MonthsAgo
        );

      //  5 And 4 Months Ago Filter
      const productFilterNew5And4MonthsAgo = new ProductFilter(4, 5);
      const filteredProductsBetweenNew5And4MonthsAgo =
        productFilterNew5And4MonthsAgo.filterBetweenMonthsAgo(filteredNew);
      //   5 And 4 Months Ago Totals
      const totalQuantityBetweenNew5And4MonthsAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew5And4MonthsAgo);
      const totalPriceBetweenNew5And4MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew5And4MonthsAgo
        );

      //  4 And 3 Months Ago Filter
      const productFilterNew4And3MonthsAgo = new ProductFilter(4, 3);
      const filteredProductsBetweenNew4And3MonthsAgo =
        productFilterNew4And3MonthsAgo.filterBetweenMonthsAgo(filteredNew);
      //   4 And 3 Months Ago Totals
      const totalQuantityBetweenNew4And3MonthsAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew4And3MonthsAgo);
      const totalPriceBetweenNew4And3MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew4And3MonthsAgo
        );

      //  3 And 2 Months Ago Filter
      const productFilterNew3And2MonthsAgo = new ProductFilter(3, 2);
      const filteredProductsBetweenNew3And2MonthsAgo =
        productFilterNew3And2MonthsAgo.filterBetweenMonthsAgo(filteredNew);
      //  3 And 2 Months Ago Totals
      const totalQuantityBetweenNew3And2MonthsAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew3And2MonthsAgo);
      const totalPriceBetweenNew3And2MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew3And2MonthsAgo
        );

      //  2 And 1 Months Ago Filter
      const productFilterNew2And1MonthsAgo = new ProductFilter(2, 1);
      const filteredProductsBetweenNew2And1MonthsAgo =
        productFilterNew2And1MonthsAgo.filterBetweenMonthsAgo(filteredNew);
      //  2 And 1 Months Ago Totals
      const totalQuantityBetweenNew2And1MonthsAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew2And1MonthsAgo);
      const totalPriceBetweenNew2And1MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew2And1MonthsAgo
        );

      console.log(filteredNew);
      console.log(filteredProductsBetweenNew2And1MonthsAgo);
      console.log(totalQuantityBetweenNew2And1MonthsAgo);
      console.log(totalPriceBetweenNew2And1MonthsAgo);
      //  1 And 0 Months Ago Filter
      const productFilterNew1And0MonthsAgo = new ProductFilter(1, 0);
      const filteredProductsBetweenNew1And0MonthsAgo =
        productFilterNew1And0MonthsAgo.filterBetweenMonthsAgo(filteredNew);
      //  1 And 0 Months Ago Totals
      const totalQuantityBetweenNew1And0MonthsAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew1And0MonthsAgo);
      const totalPriceBetweenNew1And0MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew1And0MonthsAgo
        );

      // Usados
      const filteredUsed = productFilterByState.filterByState(
        userProducts,
        "usado"
      );

      // 6 And 5 Months Ago Filter
      const productFilterUsed6And5MonthsAgo = new ProductFilter(5, 6);
      const filteredProductsBetweenUsed6And5MonthsAgo =
        productFilterUsed6And5MonthsAgo.filterBetweenMonthsAgo(filteredUsed);
      // 6 And 5 Months Ago Totals
      const totalQuantityBetweenUsed6And5MonthsAgo =
        productStats.getTotalQuantity(
          filteredProductsBetweenUsed6And5MonthsAgo
        );
      const totalPriceBetweenUsed6And5MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed6And5MonthsAgo
        );

      //  5 And 4 Months Ago Filter
      const productFilterUsed5And4MonthsAgo = new ProductFilter(4, 5);
      const filteredProductsBetweenUsed5And4MonthsAgo =
        productFilterUsed5And4MonthsAgo.filterBetweenMonthsAgo(filteredUsed);
      //   5 And 4 Months Ago Totals
      const totalQuantityBetweenUsed5And4MonthsAgo =
        productStats.getTotalQuantity(
          filteredProductsBetweenUsed5And4MonthsAgo
        );
      const totalPriceBetweenUsed5And4MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed5And4MonthsAgo
        );

      //  4 And 3 Months Ago Filter
      const productFilterUsed4And3MonthsAgo = new ProductFilter(4, 3);
      const filteredProductsBetweenUsed4And3MonthsAgo =
        productFilterUsed4And3MonthsAgo.filterBetweenMonthsAgo(filteredUsed);
      //   4 And 3 Months Ago Totals
      const totalQuantityBetweenUsed4And3MonthsAgo =
        productStats.getTotalQuantity(
          filteredProductsBetweenUsed4And3MonthsAgo
        );
      const totalPriceBetweenUsed4And3MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed4And3MonthsAgo
        );

      //  3 And 2 Months Ago Filter
      const productFilterUsed3And2MonthsAgo = new ProductFilter(3, 2);
      const filteredProductsBetweenUsed3And2MonthsAgo =
        productFilterUsed3And2MonthsAgo.filterBetweenMonthsAgo(filteredUsed);
      //  3 And 2 Months Ago Totals
      const totalQuantityBetweenUsed3And2MonthsAgo =
        productStats.getTotalQuantity(
          filteredProductsBetweenUsed3And2MonthsAgo
        );
      const totalPriceBetweenUsed3And2MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed3And2MonthsAgo
        );

      //  2 And 1 Months Ago Filter
      const productFilterUsed2And1MonthsAgo = new ProductFilter(2, 1);
      const filteredProductsBetweenUsed2And1MonthsAgo =
        productFilterUsed2And1MonthsAgo.filterBetweenMonthsAgo(filteredUsed);
      //  2 And 1 Months Ago Totals
      const totalQuantityBetweenUsed2And1MonthsAgo =
        productStats.getTotalQuantity(
          filteredProductsBetweenUsed2And1MonthsAgo
        );
      const totalPriceBetweenUsed2And1MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed2And1MonthsAgo
        );

      //  1 And 0 Months Ago Filter
      const productFilterUsed1And0MonthsAgo = new ProductFilter(1, 0);
      const filteredProductsBetweenUsed1And0MonthsAgo =
        productFilterUsed1And0MonthsAgo.filterBetweenMonthsAgo(filteredUsed);
      //  1 And 0 Months Ago Totals
      const totalQuantityBetweenUsed1And0MonthsAgo =
        productStats.getTotalQuantity(
          filteredProductsBetweenUsed1And0MonthsAgo
        );
      const totalPriceBetweenUsed1And0MonthsAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed1And0MonthsAgo
        );

      // Semanas
      // 6 And 5 Weeks Ago Filter
      const productFilter6And5WeeksAgo = new WeekProductFilter(5, 6);
      const filteredProductsBetween6And5WeeksAgo =
        productFilter6And5WeeksAgo.filterBetweenWeeksAgo(userProducts);
      // 6 And 5 Weeks Ago Totals
      const totalQuantityBetween6And5WeeksAgo = productStats.getTotalQuantity(
        filteredProductsBetween6And5WeeksAgo
      );
      const totalPriceBetween6And5WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween6And5WeeksAgo
        );

      //  5 And 4 Weeks Ago Filter
      const productFilter5And4WeeksAgo = new WeekProductFilter(4, 5);
      const filteredProductsBetween5And4WeeksAgo =
        productFilter5And4WeeksAgo.filterBetweenWeeksAgo(userProducts);
      //   5 And 4 Weeks Ago Totals
      const totalQuantityBetween5And4WeeksAgo = productStats.getTotalQuantity(
        filteredProductsBetween5And4WeeksAgo
      );
      const totalPriceBetween5And4WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween5And4WeeksAgo
        );

      //  4 And 3 Weeks Ago Filter
      const productFilter4And3WeeksAgo = new WeekProductFilter(4, 3);
      const filteredProductsBetween4And3WeeksAgo =
        productFilter4And3WeeksAgo.filterBetweenWeeksAgo(userProducts);
      //   4 And 3 Weeks Ago Totals
      const totalQuantityBetween4And3WeeksAgo = productStats.getTotalQuantity(
        filteredProductsBetween4And3WeeksAgo
      );
      const totalPriceBetween4And3WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween4And3WeeksAgo
        );

      //  3 And 2 Weeks Ago Filter
      const productFilter3And2WeeksAgo = new WeekProductFilter(3, 2);
      const filteredProductsBetween3And2WeeksAgo =
        productFilter3And2WeeksAgo.filterBetweenWeeksAgo(userProducts);
      //  3 And 2 Weeks Ago Totals
      const totalQuantityBetween3And2WeeksAgo = productStats.getTotalQuantity(
        filteredProductsBetween3And2WeeksAgo
      );
      const totalPriceBetween3And2WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween3And2WeeksAgo
        );

      //  2 And 1 Weeks Ago Filter
      const productFilter2And1WeeksAgo = new WeekProductFilter(2, 1);
      const filteredProductsBetween2And1WeeksAgo =
        productFilter2And1WeeksAgo.filterBetweenWeeksAgo(userProducts);
      //  2 And 1 Weeks Ago Totals
      const totalQuantityBetween2And1WeeksAgo = productStats.getTotalQuantity(
        filteredProductsBetween2And1WeeksAgo
      );
      const totalPriceBetween2And1WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween2And1WeeksAgo
        );

      //  1 And 0 Weeks Ago Filter
      const productFilter1And0WeeksAgo = new WeekProductFilter(1, 0);
      const filteredProductsBetween1And0WeeksAgo =
        productFilter1And0WeeksAgo.filterBetweenWeeksAgo(userProducts);
      //  1 And 0 Weeks Ago Totals
      const totalQuantityBetween1And0WeeksAgo = productStats.getTotalQuantity(
        filteredProductsBetween1And0WeeksAgo
      );
      const totalPriceBetween1And0WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween1And0WeeksAgo
        );

      // Novos
      const filteredNewWeeks = productFilterByState.filterByState(
        userProducts,
        "novo"
      );
      // 6 And 5 Weeks Ago Filter
      const productFilterNew6And5WeeksAgo = new WeekProductFilter(5, 6);
      const filteredProductsBetweenNew6And5WeeksAgo =
        productFilterNew6And5WeeksAgo.filterBetweenWeeksAgo(filteredNewWeeks);
      // 6 And 5 Weeks Ago Totals
      const totalQuantityBetweenNew6And5WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew6And5WeeksAgo);
      const totalPriceBetweenNew6And5WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew6And5WeeksAgo
        );

      //  5 And 4 Weeks Ago Filter
      const productFilterNew5And4WeeksAgo = new WeekProductFilter(4, 5);
      const filteredProductsBetweenNew5And4WeeksAgo =
        productFilterNew5And4WeeksAgo.filterBetweenWeeksAgo(filteredNewWeeks);
      //   5 And 4 Weeks Ago Totals
      const totalQuantityBetweenNew5And4WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew5And4WeeksAgo);
      const totalPriceBetweenNew5And4WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew5And4WeeksAgo
        );

      //  4 And 3 Weeks Ago Filter
      const productFilterNew4And3WeeksAgo = new WeekProductFilter(4, 3);
      const filteredProductsBetweenNew4And3WeeksAgo =
        productFilterNew4And3WeeksAgo.filterBetweenWeeksAgo(filteredNewWeeks);
      //   4 And 3 Weeks Ago Totals
      const totalQuantityBetweenNew4And3WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew4And3WeeksAgo);
      const totalPriceBetweenNew4And3WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew4And3WeeksAgo
        );

      //  3 And 2 Weeks Ago Filter
      const productFilterNew3And2WeeksAgo = new WeekProductFilter(3, 2);
      const filteredProductsBetweenNew3And2WeeksAgo =
        productFilterNew3And2WeeksAgo.filterBetweenWeeksAgo(filteredNewWeeks);
      //  3 And 2 Weeks Ago Totals
      const totalQuantityBetweenNew3And2WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew3And2WeeksAgo);
      const totalPriceBetweenNew3And2WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew3And2WeeksAgo
        );

      //  2 And 1 Weeks Ago Filter
      const productFilterNew2And1WeeksAgo = new WeekProductFilter(2, 1);
      const filteredProductsBetweenNew2And1WeeksAgo =
        productFilterNew2And1WeeksAgo.filterBetweenWeeksAgo(filteredNewWeeks);
      //  2 And 1 Weeks Ago Totals
      const totalQuantityBetweenNew2And1WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew2And1WeeksAgo);
      const totalPriceBetweenNew2And1WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew2And1WeeksAgo
        );

      //  1 And 0 Weeks Ago Filter
      const productFilterNew1And0WeeksAgo = new WeekProductFilter(1, 0);
      const filteredProductsBetweenNew1And0WeeksAgo =
        productFilterNew1And0WeeksAgo.filterBetweenWeeksAgo(filteredNewWeeks);
      //  1 And 0 Weeks Ago Totals
      const totalQuantityBetweenNew1And0WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenNew1And0WeeksAgo);
      const totalPriceBetweenNew1And0WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew1And0WeeksAgo
        );

      // Usados
      const filteredUsedWeeks = productFilterByState.filterByState(
        userProducts,
        "usado"
      );
      // 6 And 5 Weeks Ago Filter
      const productFilterUsed6And5WeeksAgo = new WeekProductFilter(5, 6);
      const filteredProductsBetweenUsed6And5WeeksAgo =
        productFilterUsed6And5WeeksAgo.filterBetweenWeeksAgo(filteredUsedWeeks);
      // 6 And 5 Weeks Ago Totals
      const totalQuantityBetweenUsed6And5WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed6And5WeeksAgo);
      const totalPriceBetweenUsed6And5WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed6And5WeeksAgo
        );

      //  5 And 4 Weeks Ago Filter
      const productFilterUsed5And4WeeksAgo = new WeekProductFilter(4, 5);
      const filteredProductsBetweenUsed5And4WeeksAgo =
        productFilterUsed5And4WeeksAgo.filterBetweenWeeksAgo(filteredUsedWeeks);
      //   5 And 4 Weeks Ago Totals
      const totalQuantityBetweenUsed5And4WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed5And4WeeksAgo);
      const totalPriceBetweenUsed5And4WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed5And4WeeksAgo
        );

      //  4 And 3 Weeks Ago Filter
      const productFilterUsed4And3WeeksAgo = new WeekProductFilter(4, 3);
      const filteredProductsBetweenUsed4And3WeeksAgo =
        productFilterUsed4And3WeeksAgo.filterBetweenWeeksAgo(filteredUsedWeeks);
      //   4 And 3 Weeks Ago Totals
      const totalQuantityBetweenUsed4And3WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed4And3WeeksAgo);
      const totalPriceBetweenUsed4And3WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed4And3WeeksAgo
        );

      //  3 And 2 Weeks Ago Filter
      const productFilterUsed3And2WeeksAgo = new WeekProductFilter(3, 2);
      const filteredProductsBetweenUsed3And2WeeksAgo =
        productFilterUsed3And2WeeksAgo.filterBetweenWeeksAgo(filteredUsedWeeks);
      //  3 And 2 Weeks Ago Totals
      const totalQuantityBetweenUsed3And2WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed3And2WeeksAgo);
      const totalPriceBetweenUsed3And2WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed3And2WeeksAgo
        );

      //  2 And 1 Weeks Ago Filter
      const productFilterUsed2And1WeeksAgo = new WeekProductFilter(2, 1);
      const filteredProductsBetweenUsed2And1WeeksAgo =
        productFilterUsed2And1WeeksAgo.filterBetweenWeeksAgo(filteredUsedWeeks);
      //  2 And 1 Weeks Ago Totals
      const totalQuantityBetweenUsed2And1WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed2And1WeeksAgo);
      const totalPriceBetweenUsed2And1WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed2And1WeeksAgo
        );

      //  1 And 0 Weeks Ago Filter
      const productFilterUsed1And0WeeksAgo = new WeekProductFilter(1, 0);
      const filteredProductsBetweenUsed1And0WeeksAgo =
        productFilterUsed1And0WeeksAgo.filterBetweenWeeksAgo(filteredUsedWeeks);
      //  1 And 0 Weeks Ago Totals
      const totalQuantityBetweenUsed1And0WeeksAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed1And0WeeksAgo);
      const totalPriceBetweenUsed1And0WeeksAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed1And0WeeksAgo
        );

      // Dias
      // 6 And 5 Days Ago Filter
      const productFilter6And5DaysAgo = new DayProductFilter(5, 6);
      const filteredProductsBetween6And5DaysAgo =
        productFilter6And5DaysAgo.filterBetweenDaysAgo(userProducts);
      // 6 And 5 Days Ago Totals
      const totalQuantityBetween6And5DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetween6And5DaysAgo
      );
      const totalPriceBetween6And5DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween6And5DaysAgo
        );

      //  5 And 4 Days Ago Filter
      const productFilter5And4DaysAgo = new DayProductFilter(4, 5);
      const filteredProductsBetween5And4DaysAgo =
        productFilter5And4DaysAgo.filterBetweenDaysAgo(userProducts);
      //   5 And 4 Days Ago Totals
      const totalQuantityBetween5And4DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetween5And4DaysAgo
      );
      const totalPriceBetween5And4DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween5And4DaysAgo
        );

      //  4 And 3 Days Ago Filter
      const productFilter4And3DaysAgo = new DayProductFilter(4, 3);
      const filteredProductsBetween4And3DaysAgo =
        productFilter4And3DaysAgo.filterBetweenDaysAgo(userProducts);
      //   4 And 3 Days Ago Totals
      const totalQuantityBetween4And3DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetween4And3DaysAgo
      );
      const totalPriceBetween4And3DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween4And3DaysAgo
        );

      //  3 And 2 Days Ago Filter
      const productFilter3And2DaysAgo = new DayProductFilter(3, 2);
      const filteredProductsBetween3And2DaysAgo =
        productFilter3And2DaysAgo.filterBetweenDaysAgo(userProducts);
      //  3 And 2 Days Ago Totals
      const totalQuantityBetween3And2DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetween3And2DaysAgo
      );
      const totalPriceBetween3And2DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween3And2DaysAgo
        );

      //  2 And 1 Days Ago Filter
      const productFilter2And1DaysAgo = new DayProductFilter(2, 1);
      const filteredProductsBetween2And1DaysAgo =
        productFilter2And1DaysAgo.filterBetweenDaysAgo(userProducts);
      //  2 And 1 Days Ago Totals
      const totalQuantityBetween2And1DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetween2And1DaysAgo
      );
      const totalPriceBetween2And1DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween2And1DaysAgo
        );

      //  1 And 0 Days Ago Filter
      const productFilter1And0DaysAgo = new DayProductFilter(1, 0);
      const filteredProductsBetween1And0DaysAgo =
        productFilter1And0DaysAgo.filterBetweenDaysAgo(userProducts);
      //  1 And 0 Days Ago Totals
      const totalQuantityBetween1And0DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetween1And0DaysAgo
      );
      const totalPriceBetween1And0DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetween1And0DaysAgo
        );

      // Novos
      const filteredNewDays = productFilterByState.filterByState(
        userProducts,
        "novo"
      );
      // 6 And 5 Days Ago Filter
      const productFilterNew6And5DaysAgo = new DayProductFilter(5, 6);
      const filteredProductsBetweenNew6And5DaysAgo =
        productFilterNew6And5DaysAgo.filterBetweenDaysAgo(filteredNewDays);
      // 6 And 5 Days Ago Totals
      const totalQuantityBetweenNew6And5DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetweenNew6And5DaysAgo
      );
      const totalPriceBetweenNew6And5DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew6And5DaysAgo
        );

      //  5 And 4 Days Ago Filter
      const productFilterNew5And4DaysAgo = new DayProductFilter(4, 5);
      const filteredProductsBetweenNew5And4DaysAgo =
        productFilterNew5And4DaysAgo.filterBetweenDaysAgo(filteredNewDays);
      //   5 And 4 Days Ago Totals
      const totalQuantityBetweenNew5And4DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetweenNew5And4DaysAgo
      );
      const totalPriceBetweenNew5And4DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew5And4DaysAgo
        );

      //  4 And 3 Days Ago Filter
      const productFilterNew4And3DaysAgo = new DayProductFilter(4, 3);
      const filteredProductsBetweenNew4And3DaysAgo =
        productFilterNew4And3DaysAgo.filterBetweenDaysAgo(filteredNewDays);
      //   4 And 3 Days Ago Totals
      const totalQuantityBetweenNew4And3DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetweenNew4And3DaysAgo
      );
      const totalPriceBetweenNew4And3DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew4And3DaysAgo
        );

      //  3 And 2 Days Ago Filter
      const productFilterNew3And2DaysAgo = new DayProductFilter(3, 2);
      const filteredProductsBetweenNew3And2DaysAgo =
        productFilterNew3And2DaysAgo.filterBetweenDaysAgo(filteredNewDays);
      //  3 And 2 Days Ago Totals
      const totalQuantityBetweenNew3And2DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetweenNew3And2DaysAgo
      );
      const totalPriceBetweenNew3And2DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew3And2DaysAgo
        );

      //  2 And 1 Days Ago Filter
      const productFilterNew2And1DaysAgo = new DayProductFilter(2, 1);
      const filteredProductsBetweenNew2And1DaysAgo =
        productFilterNew2And1DaysAgo.filterBetweenDaysAgo(filteredNewDays);
      //  2 And 1 Days Ago Totals
      const totalQuantityBetweenNew2And1DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetweenNew2And1DaysAgo
      );
      const totalPriceBetweenNew2And1DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew2And1DaysAgo
        );

      //  1 And 0 Days Ago Filter
      const productFilterNew1And0DaysAgo = new DayProductFilter(1, 0);
      const filteredProductsBetweenNew1And0DaysAgo =
        productFilterNew1And0DaysAgo.filterBetweenDaysAgo(filteredNewDays);
      //  1 And 0 Days Ago Totals
      const totalQuantityBetweenNew1And0DaysAgo = productStats.getTotalQuantity(
        filteredProductsBetweenNew1And0DaysAgo
      );
      const totalPriceBetweenNew1And0DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenNew1And0DaysAgo
        );

      // Usados
      const filteredUsedDays = productFilterByState.filterByState(
        userProducts,
        "usado"
      );
      // 6 And 5 Days Ago Filter
      const productFilterUsed6And5DaysAgo = new DayProductFilter(5, 6);
      const filteredProductsBetweenUsed6And5DaysAgo =
        productFilterUsed6And5DaysAgo.filterBetweenDaysAgo(filteredUsedDays);
      // 6 And 5 Days Ago Totals
      const totalQuantityBetweenUsed6And5DaysAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed6And5DaysAgo);
      const totalPriceBetweenUsed6And5DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed6And5DaysAgo
        );

      //  5 And 4 Days Ago Filter
      const productFilterUsed5And4DaysAgo = new DayProductFilter(4, 5);
      const filteredProductsBetweenUsed5And4DaysAgo =
        productFilterUsed5And4DaysAgo.filterBetweenDaysAgo(filteredUsedDays);
      //   5 And 4 Days Ago Totals
      const totalQuantityBetweenUsed5And4DaysAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed5And4DaysAgo);
      const totalPriceBetweenUsed5And4DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed5And4DaysAgo
        );

      //  4 And 3 Days Ago Filter
      const productFilterUsed4And3DaysAgo = new DayProductFilter(4, 3);
      const filteredProductsBetweenUsed4And3DaysAgo =
        productFilterUsed4And3DaysAgo.filterBetweenDaysAgo(filteredUsedDays);
      //   4 And 3 Days Ago Totals
      const totalQuantityBetweenUsed4And3DaysAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed4And3DaysAgo);
      const totalPriceBetweenUsed4And3DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed4And3DaysAgo
        );

      //  3 And 2 Days Ago Filter
      const productFilterUsed3And2DaysAgo = new DayProductFilter(3, 2);
      const filteredProductsBetweenUsed3And2DaysAgo =
        productFilterUsed3And2DaysAgo.filterBetweenDaysAgo(filteredUsedDays);
      //  3 And 2 Days Ago Totals
      const totalQuantityBetweenUsed3And2DaysAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed3And2DaysAgo);
      const totalPriceBetweenUsed3And2DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed3And2DaysAgo
        );

      //  2 And 1 Days Ago Filter
      const productFilterUsed2And1DaysAgo = new DayProductFilter(2, 1);
      const filteredProductsBetweenUsed2And1DaysAgo =
        productFilterUsed2And1DaysAgo.filterBetweenDaysAgo(filteredUsedDays);
      //  2 And 1 Days Ago Totals
      const totalQuantityBetweenUsed2And1DaysAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed2And1DaysAgo);
      const totalPriceBetweenUsed2And1DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed2And1DaysAgo
        );

      //  1 And 0 Days Ago Filter
      const productFilterUsed1And0DaysAgo = new DayProductFilter(1, 0);
      const filteredProductsBetweenUsed1And0DaysAgo =
        productFilterUsed1And0DaysAgo.filterBetweenDaysAgo(filteredUsedDays);
      //  1 And 0 Days Ago Totals
      const totalQuantityBetweenUsed1And0DaysAgo =
        productStats.getTotalQuantity(filteredProductsBetweenUsed1And0DaysAgo);
      const totalPriceBetweenUsed1And0DaysAgo =
        productPriceCalculator.calculateTotalPrice(
          filteredProductsBetweenUsed1And0DaysAgo
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

        totalPriceBetween6And5MonthsAgo,
        totalQuantityBetween6And5MonthsAgo,
        totalPriceBetween5And4MonthsAgo,
        totalQuantityBetween5And4MonthsAgo,
        totalPriceBetween4And3MonthsAgo,
        totalQuantityBetween4And3MonthsAgo,
        totalPriceBetween3And2MonthsAgo,
        totalQuantityBetween3And2MonthsAgo,
        totalPriceBetween2And1MonthsAgo,
        totalQuantityBetween2And1MonthsAgo,
        totalPriceBetween1And0MonthsAgo,
        totalQuantityBetween1And0MonthsAgo,

        totalPriceBetweenNew6And5MonthsAgo,
        totalQuantityBetweenNew6And5MonthsAgo,
        totalPriceBetweenNew5And4MonthsAgo,
        totalQuantityBetweenNew5And4MonthsAgo,
        totalPriceBetweenNew4And3MonthsAgo,
        totalQuantityBetweenNew4And3MonthsAgo,
        totalPriceBetweenNew3And2MonthsAgo,
        totalQuantityBetweenNew3And2MonthsAgo,
        totalPriceBetweenNew2And1MonthsAgo,
        totalQuantityBetweenNew2And1MonthsAgo,
        totalPriceBetweenNew1And0MonthsAgo,
        totalQuantityBetweenNew1And0MonthsAgo,

        totalPriceBetweenUsed6And5MonthsAgo,
        totalQuantityBetweenUsed6And5MonthsAgo,
        totalPriceBetweenUsed5And4MonthsAgo,
        totalQuantityBetweenUsed5And4MonthsAgo,
        totalPriceBetweenUsed4And3MonthsAgo,
        totalQuantityBetweenUsed4And3MonthsAgo,
        totalPriceBetweenUsed3And2MonthsAgo,
        totalQuantityBetweenUsed3And2MonthsAgo,
        totalPriceBetweenUsed2And1MonthsAgo,
        totalQuantityBetweenUsed2And1MonthsAgo,
        totalPriceBetweenUsed1And0MonthsAgo,
        totalQuantityBetweenUsed1And0MonthsAgo,

        totalPriceBetween6And5WeeksAgo,
        totalQuantityBetween6And5WeeksAgo,
        totalPriceBetween5And4WeeksAgo,
        totalQuantityBetween5And4WeeksAgo,
        totalPriceBetween4And3WeeksAgo,
        totalQuantityBetween4And3WeeksAgo,
        totalPriceBetween3And2WeeksAgo,
        totalQuantityBetween3And2WeeksAgo,
        totalPriceBetween2And1WeeksAgo,
        totalQuantityBetween2And1WeeksAgo,
        totalPriceBetween1And0WeeksAgo,
        totalQuantityBetween1And0WeeksAgo,

        totalPriceBetweenNew6And5WeeksAgo,
        totalQuantityBetweenNew6And5WeeksAgo,
        totalPriceBetweenNew5And4WeeksAgo,
        totalQuantityBetweenNew5And4WeeksAgo,
        totalPriceBetweenNew4And3WeeksAgo,
        totalQuantityBetweenNew4And3WeeksAgo,
        totalPriceBetweenNew3And2WeeksAgo,
        totalQuantityBetweenNew3And2WeeksAgo,
        totalPriceBetweenNew2And1WeeksAgo,
        totalQuantityBetweenNew2And1WeeksAgo,
        totalPriceBetweenNew1And0WeeksAgo,
        totalQuantityBetweenNew1And0WeeksAgo,

        totalPriceBetweenUsed6And5WeeksAgo,
        totalQuantityBetweenUsed6And5WeeksAgo,
        totalPriceBetweenUsed5And4WeeksAgo,
        totalQuantityBetweenUsed5And4WeeksAgo,
        totalPriceBetweenUsed4And3WeeksAgo,
        totalQuantityBetweenUsed4And3WeeksAgo,
        totalPriceBetweenUsed3And2WeeksAgo,
        totalQuantityBetweenUsed3And2WeeksAgo,
        totalPriceBetweenUsed2And1WeeksAgo,
        totalQuantityBetweenUsed2And1WeeksAgo,
        totalPriceBetweenUsed1And0WeeksAgo,
        totalQuantityBetweenUsed1And0WeeksAgo,

        totalPriceBetween6And5DaysAgo,
        totalQuantityBetween6And5DaysAgo,
        totalPriceBetween5And4DaysAgo,
        totalQuantityBetween5And4DaysAgo,
        totalPriceBetween4And3DaysAgo,
        totalQuantityBetween4And3DaysAgo,
        totalPriceBetween3And2DaysAgo,
        totalQuantityBetween3And2DaysAgo,
        totalPriceBetween2And1DaysAgo,
        totalQuantityBetween2And1DaysAgo,
        totalPriceBetween1And0DaysAgo,
        totalQuantityBetween1And0DaysAgo,

        totalPriceBetweenNew6And5DaysAgo,
        totalQuantityBetweenNew6And5DaysAgo,
        totalPriceBetweenNew5And4DaysAgo,
        totalQuantityBetweenNew5And4DaysAgo,
        totalPriceBetweenNew4And3DaysAgo,
        totalQuantityBetweenNew4And3DaysAgo,
        totalPriceBetweenNew3And2DaysAgo,
        totalQuantityBetweenNew3And2DaysAgo,
        totalPriceBetweenNew2And1DaysAgo,
        totalQuantityBetweenNew2And1DaysAgo,
        totalPriceBetweenNew1And0DaysAgo,
        totalQuantityBetweenNew1And0DaysAgo,

        totalPriceBetweenUsed6And5DaysAgo,
        totalQuantityBetweenUsed6And5DaysAgo,
        totalPriceBetweenUsed5And4DaysAgo,
        totalQuantityBetweenUsed5And4DaysAgo,
        totalPriceBetweenUsed4And3DaysAgo,
        totalQuantityBetweenUsed4And3DaysAgo,
        totalPriceBetweenUsed3And2DaysAgo,
        totalQuantityBetweenUsed3And2DaysAgo,
        totalPriceBetweenUsed2And1DaysAgo,
        totalQuantityBetweenUsed2And1DaysAgo,
        totalPriceBetweenUsed1And0DaysAgo,
        totalQuantityBetweenUsed1And0DaysAgo,
      });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export default new Log().handler;
