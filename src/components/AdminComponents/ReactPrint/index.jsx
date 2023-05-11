import { FormLabel, Input, Table } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const ReactPrint = () => {
  const [pedido, setPedido] = useState();
  const router = useRouter();
  const { id } = router.query;
  const [observacao, setObservacao] = useState("");
  const [desconto, setDesconto] = useState(0);

  const handleObservacaoChange = (e) => {
    setObservacao(e.target.value);
  };
  const handleDescontoChange = (e) => {
    setDesconto(e.target.value);
  };
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
  var timestamp = Date.now() / 1000;

  let subtotal = 0;
  let total = 0;
  var datetime = new Date(timestamp * 1000);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "ReactPrint",
    onafterprint: () => console.log("onAfterPrint event triggered"),
  });
  return (
    <>
      <FormLabel>Observação</FormLabel>
      <Input onChange={handleObservacaoChange} type="text" />
      <FormLabel>Desconto</FormLabel>
      <Input onChange={handleDescontoChange} type="text" />
      <button onClick={handlePrint}>Imprimir Nota</button>
      <div ref={componentRef} classNameName="w-full, h-full">
        <div className="flex flex-col items-center justify-center py-5 bg-slate-50">
          <div className="flex items-center mb-3">
            <Image
              src="/logo.png"
              alt="Logo"
              height="90"
              width="90"
              className="h-20 w-20 rounded-full mr-2"
            />
            <h1 className="text-2xl font-bold">Moveis Eliane</h1>
          </div>
          <p className="text-sm">*Via cliente. {datetime.toLocaleString()}</p>

          <div className="flex flex-wrap justify-between w-full">
            <div className="w-1/3 border 2px">
              <p>
                <span className="m-2 align-middle font-bold">Cliente:</span>{" "}
                {pedido?.name}
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Telefone:</span>
                {pedido?.phoneNumber}
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Endereço:</span>
                {pedido?.address?.street}
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Cidade:</span>
                {pedido?.address?.city}
              </p>
              {observacao != "" && (
                <p>
                  <span className="m-2 align-middle font-bold">
                    Observação:
                  </span>
                  {observacao}
                </p>
              )}
            </div>

            <div className="w-1/3 border 2px">
              <p>
                <span className="m-2 align-middle font-bold">Contato:</span>{" "}
                (47) 99625-9348
              </p>
              <p>
                <span className="m-2 align-middle font-bold">CNPJ:</span>{" "}
                28.442.047/0001-24
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Endereço:</span>{" "}
                Waldemar Rau, 141
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Site:</span>
                www.moveiseliane.com
              </p>
              <p>
                <span className=" m-2 align-middle font-bold">
                  Redes Sociais:
                </span>
                @moveiseliane
              </p>
            </div>
          </div>
          <table className="w-4/5 m-5">
            <thead>
              <tr>
                <th className="text-left font-bold">Produto</th>
                <th className="text-left font-bold">Valor</th>
                <th className="text-left font-bold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {pedido?.userProducts.map((item, i) => {
                subtotal += item?.product?.price;
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
              {desconto > 0 && (
                <tr>
                  <td className="text-right font-bold">Subtotal:</td>
                  <td className="font-bold">R$ {subtotal},00</td>
                </tr>
              )}

              <tr>
                <td className="text-right font-bold">Total:</td>
                <td className="font-bold">
                  R$ {Math.round((total / 100) * (100 - desconto))},00
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm">*Este recibo é válido por 30 dias.</p>
          <div className="border-b-2 w-96 m-2">
            <span className="font-bold">Assinatura Vendedor:</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-5 bg-slate-50">
          <div className="flex items-center mb-3">
            <Image
              src="/logo.png"
              alt="Logo"
              height="90"
              width="90"
              className="h-20 w-20 rounded-full mr-2"
            />
            <h1 className="text-2xl font-bold">Moveis Eliane</h1>
          </div>
          <p className="text-sm">*Via Entrega. {datetime.toLocaleString()}</p>

          <div className="flex flex-wrap justify-between w-full">
            <div className="w-1/3 border 2px">
              <p>
                <span className="m-2 align-middle font-bold">Cliente:</span>{" "}
                {pedido?.name}
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Telefone:</span>
                {pedido?.phoneNumber}
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Endereço:</span>
                {pedido?.address?.street}
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Cidade:</span>
                {pedido?.address?.city}
              </p>
              {observacao != "" && (
                <p>
                  <span className="m-2 align-middle font-bold">
                    Observação:
                  </span>
                  {observacao}
                </p>
              )}
            </div>

            <div className="w-1/3 border 2px">
              <p>
                <span className="m-2 align-middle font-bold">Contato:</span>{" "}
                (47) 99625-9348
              </p>
              <p>
                <span className="m-2 align-middle font-bold">CNPJ:</span>{" "}
                28.442.047/0001-24
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Endereço:</span>{" "}
                Waldemar Rau, 141
              </p>
              <p>
                <span className="m-2 align-middle font-bold">Site:</span>
                www.moveiseliane.com
              </p>
              <p>
                <span className=" m-2 align-middle font-bold">
                  Redes Sociais:
                </span>
                @moveiseliane
              </p>
            </div>
          </div>
          <table className="w-4/5 m-5">
            <thead>
              <tr>
                <th className="text-left font-bold">Produto</th>
                <th className="text-left font-bold">Valor</th>
                <th className="text-left font-bold">Estado</th>
                {desconto > 0 && (
                  <th className="text-left font-bold">Desconto</th>
                )}
              </tr>
            </thead>
            <tbody>
              {pedido?.userProducts.map((item, i) => {
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
                    {desconto > 0 && (
                      <td>
                        {desconto}% <hr />
                      </td>
                    )}
                  </tr>
                );
              })}
              {desconto > 0 && (
                <tr>
                  <td className="text-right font-bold">Subtotal:</td>
                  <td className="font-bold">R$ {subtotal},00</td>
                </tr>
              )}

              <tr>
                <td className="text-right font-bold">Total:</td>
                <td className="font-bold">
                  R$ {Math.round((total / 100) * (100 - desconto))},00
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm">*Este recibo é válido por 30 dias.</p>
          <div className="border-b-2 w-96 m-2">
            <span className="font-bold">Assinatura Cliente:</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactPrint;
