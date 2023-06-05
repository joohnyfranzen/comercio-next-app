import { Product } from "@/@types/Product";
import api from "..";
import { SearchBody } from "@/@types/services";

export type ProductBody = SearchBody & {
  product?: Product;
};

export type ProductResponse = Product[];

export const productProvider = {
  index: () => api.get<ProductResponse>("/product"),

  show: (params: ProductBody) =>
    api.get<ProductResponse>("/product", { params }),

  update: (params: ProductBody) =>
    api.delete<ProductResponse>("/product", { params }),

  destroy: (params: ProductBody) =>
    api.delete<ProductResponse>("/product", { params }),
};

// productProvider.index({
//   q: "Alguma coisa",
//   page: 10,
//   orderBy: "id",
//   orderDesc: true,
//   product: {
//     price: 123
//   },
// });
