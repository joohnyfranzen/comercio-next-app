import { Inventory } from "./Inventory";
import { UserProduct } from "./UserProduct";

export type Product = {
  id: number;
  name: string;
  price: number;
  userProducts: UserProduct[];
  inventory?: Inventory;
};
