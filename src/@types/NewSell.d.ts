export type NewSell = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  address: {
    street?: string;
    city?: string;
  };
  userProducts?: Products[];
};
