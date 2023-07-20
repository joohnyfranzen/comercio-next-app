import { Product } from "./Product";
import { User } from "./User";

export type UserProduct = {
  id: string;
  userId: string;
  productId: string;
  user?: User;
  product: Product;
  createdAt: Date | null;
  updatedAt: Date | null;
};
