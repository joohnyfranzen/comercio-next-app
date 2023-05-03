import { User } from "./User";

export type Address = {
  id: number;
  street: string;
  city: string;
  userId: number;
  user: User;
};
