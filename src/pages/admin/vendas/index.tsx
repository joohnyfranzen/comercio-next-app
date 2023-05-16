import { User } from "@/@types/User";
import DeleteOrder from "@/components/AdminComponents/DelOrder";
import EndOrder from "@/components/AdminComponents/EndOrder";
import Layout from "@/components/AdminComponents/Layout";
import { Button, Td } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
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
      <h1 className="text-center font-bold text-2xl mb-5">Vendas</h1>
      <Button colorScheme="facebook">
        <Link className="flex m-5" href="/admin/novavenda">
          Nova Venda
        </Link>
      </Button>
      <div className="text-center justify-center flex flex-wrap">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-5 py-3 border">Usuário</th>
              <th className="px-5 py-3 border">Compra</th>
              <th className="px-5 py-3 border">Total</th>
              <th className="px-5 py-3 border">Detalhes</th>
              <th className="px-5 py-3 border">Finalizar</th>
              <th className="px-5 py-3 border">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((vendasPorUsuário) => {
              let total = 0;
              return (
                <tr key={vendasPorUsuário.id}>
                  <td>{vendasPorUsuário.name}</td>
                  <td className="px-5 py-3 border">
                    {vendasPorUsuário.userProducts?.map((product) => {
                      return (
                        <>
                          {product.product.name}
                          <br />
                        </>
                      );
                    })}
                  </td>
                  <td className="px-5 py-3 border">
                    {vendasPorUsuário.userProducts?.map((product) => {
                      total += product.product.price;
                      return <></>;
                    })}
                    {total}
                  </td>

                  <td className="px-5 py-3 border">
                    <Link href={`/admin/venda/${vendasPorUsuário.id}`}>
                      <Button variant="solid" color="black" bgColor="green.200">
                        Imprimir
                      </Button>
                    </Link>
                  </td>

                  <td className="px-5 py-3 border">
                    {vendasPorUsuário.userProducts?.map((product) => {
                      return (
                        <>
                          <EndOrder id={product.id} />
                        </>
                      );
                    })}
                  </td>
                  <td className="px-5 py-3 border">
                    {vendasPorUsuário.userProducts?.map((product) => {
                      return (
                        <>
                          <EndOrder id={product.id} />
                          <DeleteOrder id={product.id} />
                        </>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Button colorScheme="facebook">
        <Link className="flex m-5" href="/admin/novavenda">
          Nova Venda{" "}
        </Link>
      </Button>
    </Layout>
  );
}
