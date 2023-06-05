import { ProductOptional as ProductType } from "@/back/@types/prisma";

export type ScrollProductsProps = {
  products: ProductType[];
  title: string;
};
