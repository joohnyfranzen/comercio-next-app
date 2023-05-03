import { Address } from "./Address";

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: Address;
  userProducts: UserProduct[];
};
