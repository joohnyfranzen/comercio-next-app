import { UserProduct } from "@/@types/UserProduct";

export default class ProductPriceCalculator {
  calculateTotalPrice(products: UserProduct[]): number {
    return products.reduce((total, userProduct) => {
      return total + userProduct.product.price;
    }, 0);
  }
}
