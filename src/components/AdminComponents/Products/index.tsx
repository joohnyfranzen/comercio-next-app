import { Product } from "@/@types/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    submitForm();
  }, []);
  const submitForm = () => {
    axios.get("/api/product").then((response) => setProducts(response.data));
  };

  return (
    <div>
      <h1>Produtos</h1>
      {products?.map((product) => {
        return (
          <>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.state == "novo" ? <>Novo</> : <>Usado</>}</h2>
            <h2>
              {product.inventory == null ? (
                <></>
              ) : (
                <>{product.inventory.stock}</>
              )}
            </h2>
            {product.images == null ? (
              <></>
            ) : (
              <>
                <Image
                  alt="produto"
                  src={String(product.images[0].imageName)}
                  width={200}
                ></Image>
              </>
            )}
          </>
        );
      })}
      <Link href="/admin/novoproduto">Novo Produto</Link>
    </div>
  );
}
