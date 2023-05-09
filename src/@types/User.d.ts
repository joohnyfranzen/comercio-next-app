import { Address } from "./Address";
import { UserProduct } from "./UserProduct";

export type User = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  address?: Address;
  userProducts?: UserProduct[];
};
