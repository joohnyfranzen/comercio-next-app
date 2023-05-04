import { Product } from "./Product";

export type Image = {
  id: string;
  imageUrl: string;
  imageName: string;
  productId: string;
  product: Product;
};
