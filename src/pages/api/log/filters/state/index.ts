import { UserProduct } from "@/@types/UserProduct";
import { ProductState } from "@/@types/Product"; // Certifique-se de que o arquivo está correto e o tipo ProductState é exportado

export default class ProductFilterByState {
  filterByState(products: UserProduct[], state: ProductState): UserProduct[] {
    const filteredProducts = products.filter((userProduct) => {
      console.log("UserProduct:", userProduct);
      console.log("Product state:", userProduct.product.state);
      return userProduct.product.state === state;
    });

    console.log("Filtered products:", filteredProducts);
    return filteredProducts;
  }
}
