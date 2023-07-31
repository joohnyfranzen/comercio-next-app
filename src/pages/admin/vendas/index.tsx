import { UserProduct } from "@/@types/UserProduct";
import DeleteOrder from "@/components/AdminComponents/DelOrder";
import EndOrder from "@/components/AdminComponents/EndOrder";
import Layout from "@/components/AdminComponents/Layout";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";

export default function Vendas() {
  const [data, setData] = useState<UserProduct[]>([]);
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    getVendas();
  }, []);

  const getVendas = async () => {
    try {
      const response = await axios.get("/api/userproduct");
      const vendasData = response.data;

      const uniqueIds = vendasData.reduce(
        (ids: string[], venda: UserProduct) => {
          if (!ids.includes(venda.userId)) {
            ids.push(venda.userId);
          }
          return ids;
        },
        []
      );
      setData(vendasData);
      setIds(uniqueIds);
    } catch (error) {
      console.error("Erro ao obter vendas:", error);
    }
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
            {ids?.map((id) => {
              const vendas = data.filter((item) => item.userId === id);
              console.log(vendas);
              if (vendas.length === 0) {
                return null; // Verifica se não há vendas com o ID do usuário e retorna null para evitar erros
              }
              if (vendas.length === 1) {
                return vendas.map((venda) => (
                  <tr key={venda.id}>
                    <td>{venda.user?.name}</td>
                    <td className="px-5 py-3 border">
                      {venda.product.name}
                      <br />
                    </td>
                    <td className="px-5 py-3 border">{venda.product.price}</td>
                    <td className="px-5 py-3 border">
                      <Link href={`/admin/venda/${venda.id}`}>
                        <Button
                          variant="solid"
                          color="black"
                          bgColor="green.200"
                        >
                          Imprimir
                        </Button>
                      </Link>
                    </td>
                    <td className="px-5 py-3 border">
                      <EndOrder id={venda.userId} />
                    </td>
                    <td className="px-5 py-3 border">
                      <DeleteOrder id={venda.userId} />
                    </td>
                  </tr>
                ));
              } else {
                return (
                  <tr key={vendas[0].userId}>
                    <td>{vendas[0].user?.name}</td>
                    <td className="px-5 py-3 border">
                      {vendas.map((venda) => (
                        <p key={venda.id}>{venda.product.name}</p>
                      ))}
                    </td>
                    <td className="px-5 py-3 border">
                      {vendas.map((venda, i) => (
                        <p
                          key={venda.id}
                          className={i === vendas.length - 1 ? "underline" : ""}
                        >
                          {i > 0 ? "+" : ""}
                          {venda.product.price},00
                        </p>
                      ))}
                      {vendas.reduce(
                        (acc, venda) => acc + venda.product.price,
                        0
                      )}
                      ,00
                    </td>
                    <td className="px-5 py-3 border">
                      <Link href={`/admin/venda/${vendas[0].id}`}>
                        <Button
                          variant="solid"
                          color="black"
                          bgColor="green.200"
                        >
                          Imprimir
                        </Button>
                      </Link>
                    </td>
                    <td className="px-5 py-3 border">
                      <EndOrder id={vendas[0].userId} />
                    </td>
                    <td className="px-5 py-3 border">
                      <DeleteOrder id={vendas[0].userId} />
                    </td>
                  </tr>
                );
              }
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
