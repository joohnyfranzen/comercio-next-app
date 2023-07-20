import { UserProduct } from "@/@types/UserProduct";

export default class ProductQuantity {
  getTotalQuantity(products: UserProduct[]): number {
    return products.length;
  }
}
