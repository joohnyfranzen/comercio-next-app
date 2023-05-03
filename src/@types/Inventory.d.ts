import { Product } from "./Product";

export type Inventory = {
  id: number;
  stock: number;
  productId: number;
  product: Product;
};
