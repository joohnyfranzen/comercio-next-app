import { Image } from "./Image";
import { Inventory } from "./Inventory";
import { UserProduct } from "./UserProduct";

export type Product = {
  id: number;
  name: string;
  price: number;
  state: string;
  userProducts: UserProduct[];
  inventory?: Inventory;
  images?: Image[];
};
