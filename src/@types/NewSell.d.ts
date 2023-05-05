export type NewSell = {
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
