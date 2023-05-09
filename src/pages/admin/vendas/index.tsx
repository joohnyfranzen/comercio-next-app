import { User } from "@/@types/User";
import DeleteOrder from "@/components/AdminComponents/DelOrder";
import Layout from "@/components/AdminComponents/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Vendas() {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    getVendas();
  }, []);
  const getVendas = () => {
    axios.get("/api/userproduct").then((response) => setData(response.data));
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      Vendas
      {data?.map((vendasPorUsuário) => {
        let total = 0;
        return (
          <>
            <h2>Compra de: {vendasPorUsuário.name}</h2>
            {vendasPorUsuário.userProducts?.map((product) => {
              total += product.product.price;
              return (
                <>
                  <h2>Produto: {product.product.name}</h2>
                  <h2>Valor: R${product.product.price},00</h2>
                  <DeleteOrder id={product.id} />
                </>
              );
            })}
            <h2>Total: R${total},00</h2>
            <Link href={`/admin/venda/${vendasPorUsuário.id}`}>
              Ver Detalhes
            </Link>
          </>
        );
      })}
    </Layout>
  );
}
