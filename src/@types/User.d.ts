import { Address } from "./Address";
import { UserProduct } from "./UserProduct";

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: Address;
  userProducts: UserProduct[];
};
