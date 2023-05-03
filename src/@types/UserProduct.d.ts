import { Product } from "./Product";
import { User } from "./User";

export type UserProduct = {
  id: number;
  userId: number;
  productId: number;
  user: User;
  product: Product;
};
