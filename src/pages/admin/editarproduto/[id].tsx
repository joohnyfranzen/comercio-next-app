import { Product } from "@/@types/Product";
import DeleteImage from "@/components/AdminComponents/DelImage";
import UploadImageToStorage from "@/components/AdminComponents/ImageUpload";
import Layout from "@/components/AdminComponents/Layout";
import image from "@/pages/api/image";
import { Button, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
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
      <div className="w-full flex justify-center mt-10">
        <form className="w-96 text-center" onSubmit={handleSubmit}>
          <h1 className="text-2xl my-5">Editar Produto</h1>
          <Input
            type="text"
            className="my-5"
            defaultValue={product?.name}
            ref={nameRef}
          />
          <Input
            type="number"
            className="mb-5"
            defaultValue={product?.price}
            ref={priceRef}
          />
          <Select className="mb-5" name="state" id="state" ref={stateRef}>
            <option value="novo">Novo</option>
            <option value="usado">Usado</option>
          </Select>
          {product?.inventory == null ? (
            <div className="w-full">
              <h2>Criar Estoque</h2>
              <Input className="w-full" type="number" ref={stockRef} />
            </div>
          ) : (
            <div className="w-full">
              <h2>Estoque</h2>
              <Input
                className="w-full"
                type="number"
                ref={stockRef}
                defaultValue={product?.inventory?.stock}
              />
            </div>
          )}
          {product?.images === null ? (
            <>Sem imagens</>
          ) : (
            <>
              {product?.images?.map((image) => {
                return (
                  <>
                    {" "}
                    <Image
                      key={image.id}
                      src={String(image.imageUrl)}
                      height={200}
                      width={200}
                      alt="Imagem do Produto"
                    />
                    <DeleteImage image={image} />
                  </>
                );
              })}
            </>
          )}

          {product && <UploadImageToStorage product={product} />}
          <Button className="mt-5" colorScheme="green" type="submit">
            Editar
          </Button>
        </form>
      </div>
    </Layout>
  );
}
