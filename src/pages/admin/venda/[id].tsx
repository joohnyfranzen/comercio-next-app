import { User } from "@/@types/User";
import Layout from "@/components/AdminComponents/Layout";
import ReactPrint from "@/components/AdminComponents/ReactPrint";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Venda() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<User>();

  useEffect(() => {
    const getVenda = () => {
      axios
        .get(`/api/userproduct/${id}`)
        .then((response) => setData(response.data));
    };
    if (id) {
      getVenda();
    }
  }, [id]);

  var total = 0;
  return (
    <Layout>
      {data?.name}
      {data?.phoneNumber} --
      {data?.address?.street} ---
      {data?.userProducts?.map((product) => {
        return (
          (total += product.product.price),
          (
            <>
              <h2>Produto: {product.product.name}</h2>
              <h2>Valor: R${product.product.price},00</h2>
              <h2>Total: R${total},00</h2>
            </>
          )
        );
      })}
      <ReactPrint />
    </Layout>
  );
}
