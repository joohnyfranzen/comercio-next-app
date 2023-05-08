import { Product } from "@/@types/Product";
import Layout from "@/components/AdminComponents/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function EditarProduto() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const stockRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getProduct = () => {
      axios
        .get(`/api/product/${id}`)
        .then((response) => setProduct(response.data));
    };
    if (id) {
      getProduct();
    }
  }, [id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedProduct = {
      ...product,
      name: nameRef.current?.value,
      price: priceRef.current?.value,
      state: stateRef.current?.value,
      inventory: undefined,
    };
    axios.put(`/api/product/${id}`, updatedProduct).then((response) => {
      console.log("Produto atualizado com sucesso!");
    });
    if (product?.inventory) {
      const updatedStock = {
        ...product.inventory,
        stock: stockRef.current?.value,
      };
      axios
        .put(`/api/inventory/${product.inventory.id}`, updatedStock)
        .then((response) => {
          console.log("Estoque atualizado com sucesso!");
          router.push("/admin/produtos");
        });
    }
    if (product?.inventory === null) {
      const newStock = {
        stock: stockRef.current?.value,
        productId: product?.id,
      };
      axios.post(`/api/inventory`, newStock).then((response) => {
        console.log("Estoque criado com sucesso!");
        router.push("/admin/produtos");
      });
    }
  };

  return (
    <Layout>
      <h1>Editar Produto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={product?.name} ref={nameRef} />
        <input type="number" defaultValue={product?.price} ref={priceRef} />
        <select name="state" id="state" ref={stateRef}>
          <option value="novo">Novo</option>
          <option value="usado">Usado</option>
        </select>
        {product?.inventory == null ? (
          <>
            Estoque
            <input type="number" ref={stockRef} />
          </>
        ) : (
          <>
            Estoque
            <input
              type="number"
              ref={stockRef}
              defaultValue={product?.inventory?.stock}
            />
          </>
        )}
        <button type="submit">Enviar</button>
      </form>
    </Layout>
  );
}
