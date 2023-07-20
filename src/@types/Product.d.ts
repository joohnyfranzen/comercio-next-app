import { Image } from "./Image";
import { Inventory } from "./Inventory";
import { UserProduct } from "./UserProduct";

export type ProductState = "novo" | "usado";
export type Product = {
  id: string;
  name: string;
  price: number;
  state: string;
  userProducts?: UserProduct[];
  inventory?: Inventory;
  images?: Image[];
  discount?: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  visible?: boolean;
};
