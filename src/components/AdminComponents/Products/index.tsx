import { Product } from "@/@types/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import DeleteProduct from "../DelProduct";
import { Button } from "@chakra-ui/react";

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
      <h1 className="text-center font-bold text-2xl mb-5">Produtos</h1>
      <Link className="flex m-5" href="/admin/novoproduto">
        <Button>Novo Produto</Button>
      </Link>
      <div className="text-center justify-center flex flex-wrap">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-5 py-3 border">Nome</th>
              <th className="px-5 py-3 border">Preço</th>
              <th className="px-5 py-3 border">Estado</th>
              <th className="px-5 py-3 border">Quantidade</th>
              <th className="px-5 py-3 border">Imagem</th>
              <th className="px-5 py-3 border">Editar</th>
              <th className="px-5 py-3 border">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="px-5 py-3 border">{product.name}</td>
                  <td className="px-5 py-3 border">R$ {product.price},00</td>
                  <td className="px-5 py-3 border">
                    {product.state == "novo" ? <>Novo</> : <>Usado</>}
                  </td>
                  <td className="px-5 py-3 border">
                    {product.inventory == null ? (
                      <>N/A</>
                    ) : (
                      <>{product.inventory.stock}</>
                    )}
                  </td>
                  {product.images == null ? (
                    <td className="px-5 py-3 border"></td>
                  ) : (
                    <td className="px-5 py-3 border">
                      <Image
                        alt="produto"
                        src={String(product.images[0].imageName)}
                        width={200}
                      ></Image>
                    </td>
                  )}
                  <td className="px-5 py-3 border">
                    <Link href={`/admin/editarproduto/${product.id}`}>
                      <Button variant="solid" color="black" bgColor="green.200">
                        Editar
                      </Button>
                    </Link>
                  </td>
                  <td className="px-5 py-3 border">
                    <DeleteProduct id={product.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Link className="flex m-5" href="/admin/novoproduto">
        <Button>Novo Produto</Button>
      </Link>
    </div>
  );
}
