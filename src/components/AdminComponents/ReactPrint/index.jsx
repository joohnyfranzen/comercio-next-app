import { Table } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const ReactPrint = () => {
  const [pedido, setPedido] = useState();
  const router = useRouter();
  const { id } = router.query;
  console.log(pedido);
  useEffect(() => {
    const getPedido = () => {
      axios.get(`/api/userproduct/${id}`).then((response) => {
        setPedido(response.data);
        console.log(response);
      });
    };
    if (id) {
      getPedido();
    }
  }, [id]);
  let total = 0;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "ReactPrint",
    onafterprint: () => console.log("onAfterPrint event triggered"),
  });
  return (
    <>
      <button onClick={handlePrint}>Imprimir Nota</button>
      <div ref={componentRef} classNameName="w-full, h-full">
        <div className="flex flex-col items-center justify-center py-10 bg-slate-50">
          <div className="flex items-center mb-5">
            <Image
              src="/logo.png"
              alt="Logo"
              height="50"
              width="50"
              className="h-20 w-20 border rounded-full mr-2"
            />
            <h1 className="text-2xl font-bold">Moveis Eliane</h1>
          </div>
          <div className="border 2px flex flex-wrap justify-evenly w-full">
            <div className="w-1/3 border 2px">
              <p>
                <span className="m-3 font-bold">Usuário:</span> {pedido?.name}
              </p>
              <p>
                <span className="m-3 font-bold">Telefone:</span>
                {pedido?.phoneNumber}
              </p>
              <p>
                <span className="m-3 font-bold">Endereço:</span>
                {pedido?.address?.street}
              </p>
              <p>
                <span className="m-3 font-bold">Cidade:</span>
                {pedido?.address?.city}
              </p>
            </div>

            <div className="w-1/3 border 2px">
              <p>
                <span className="m-3 font-bold">Endereço:</span> Waldemar Rau,
                141
              </p>
              <p>
                <span className="m-3 font-bold">Site:</span>
                www.moveiseliane.com.br
              </p>
              <p>
                <span className=" m-3 font-bold">Redes Sociais:</span>
                @moveiseliane
              </p>
            </div>
            <div className="border w-1/3">
              <p>
                <span className="m-3 font-bold">Inscrição Estadual:</span>
                123456789
              </p>
              <p>
                <span className="m-3 font-bold">CNPJ:</span> 12.345.678/0001-90
              </p>
              <p>
                <span className="m-3 font-bold">Vendedor:</span> Jonathan
              </p>
              <p>
                <span className="m-3 font-bold">CPF Vendedor:</span>
                098.479.999.02
              </p>
            </div>
          </div>
          <table className="w-4/5 m-10">
            <thead>
              <tr>
                <th className="text-left font-bold">Produto</th>
                <th className="text-left font-bold">Valor</th>
                <th className="text-left font-bold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {pedido?.userProducts.map((item, i) => {
                total += item?.product?.price;
                return (
                  <tr key={i}>
                    <td>
                      {item?.product?.name} <hr />
                    </td>
                    <td>
                      R$ {item?.product?.price},00
                      <hr />
                    </td>
                    <td>
                      {item?.product?.state} <hr />
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="text-right font-bold">Total:</td>
                <td className="font-bold">R$ {total},00</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm">*Este recibo é válido por 30 dias.</p>
        </div>
        <div className="flex flex-col items-center justify-center py-10 bg-slate-50">
          <div className="flex items-center mb-5">
            <Image
              src="/logo.png"
              alt="Logo"
              height="50"
              width="50"
              className="h-20 w-20 border rounded-full mr-2"
            />
            <h1 className="text-2xl font-bold">Moveis Eliane</h1>
          </div>
          <div className="border 2px flex flex-wrap justify-evenly w-full">
            <div className="w-1/3 border 2px">
              <p>
                <span className="m-3 font-bold">Usuário:</span> {pedido?.name}
              </p>
              <p>
                <span className="m-3 font-bold">Telefone:</span>
                {pedido?.phoneNumber}
              </p>
              <p>
                <span className="m-3 font-bold">Endereço:</span>
                {pedido?.address?.street}
              </p>
              <p>
                <span className="m-3 font-bold">Cidade:</span>
                {pedido?.address?.city}
              </p>
            </div>

            <div className="w-1/3 border 2px">
              <p>
                <span className="m-3 font-bold">Endereço:</span> Waldemar Rau,
                141
              </p>
              <p>
                <span className="m-3 font-bold">Site:</span>
                www.moveiseliane.com.br
              </p>
              <p>
                <span className=" m-3 font-bold">Redes Sociais:</span>
                @moveiseliane
              </p>
            </div>
            <div className="border w-1/3">
              <p>
                <span className="m-3 font-bold">Inscrição Estadual:</span>
                123456789
              </p>
              <p>
                <span className="m-3 font-bold">CNPJ:</span> 12.345.678/0001-90
              </p>
              <p>
                <span className="m-3 font-bold">Vendedor:</span> Jonathan
              </p>
              <p>
                <span className="m-3 font-bold">CPF Vendedor:</span>
                098.479.999.02
              </p>
            </div>
          </div>
          <table className="w-4/5 m-10">
            <thead>
              <tr>
                <th className="text-left font-bold">Produto</th>
                <th className="text-left font-bold">Valor</th>
                <th className="text-left font-bold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {pedido?.userProducts.map((item, i) => {
                total += item?.product?.price;
                return (
                  <tr key={i}>
                    <td>
                      {item?.product?.name} <hr />
                    </td>
                    <td>
                      R$ {item?.product?.price},00
                      <hr />
                    </td>
                    <td>
                      {item?.product?.state} <hr />
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="text-right font-bold">Total:</td>
                <td className="font-bold">R$ {total},00</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm">*Este recibo é válido por 30 dias.</p>
        </div>
      </div>
    </>
  );
};

export default ReactPrint;
