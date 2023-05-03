export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  userProducts: UserProduct[];
};
