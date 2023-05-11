import Layout from "@/components/AdminComponents/Layout";
import { Button, FormLabel, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

export default function Orçamento() {
  const [products, setProducts] = useState([]);
  const [productCounts, setProductCounts] = useState([1]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  var timestamp = Date.now() / 1000;
  let total = 0;

  var datetime = new Date(timestamp * 1000);
  useEffect(() => {
    const getData = () => {
      axios.get("/api/product").then((response) => setProducts(response.data));
    };
    getData();
  }, []);

  const addProduct = () => {
    setProductCounts((prevCounts) => [...prevCounts, prevCounts.length + 1]);
    setSelectedProducts((prevProducts) => [...prevProducts, products[0]]);
  };

  const handleProductSelect = (index, productId) => {
    const newSelectedProducts = [...selectedProducts];
    newSelectedProducts[index] = products.find(
      (product) => product.id === String(productId)
    );
    setSelectedProducts(newSelectedProducts);
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "ReactPrint",
    onafterprint: () => console.log("onAfterPrint event triggered"),
  });
  return (
    <Layout>
      Orçamento
      {productCounts.map((count, index) => (
        <Select
          key={count}
          id={`select-${count}`}
          defaultValue={selectedProducts[index]?.id}
          onChange={(event) => handleProductSelect(index, event.target.value)}
        >
          {products.map((product) => {
            return (
              <option value={String(product.id)} key={String(product.id)}>
                {product.name}
              </option>
            );
          })}
        </Select>
      ))}
      <Button onClick={addProduct}>Adicionar Produto</Button>
      <ul>
        {selectedProducts.map((product, index) => (
          <li key={index}>{product?.name}</li>
        ))}
      </ul>
      <Button colorScheme="gray" onClick={handlePrint}>
        Imprimir Nota
      </Button>
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
          <p className="text-sm">*ORÇAMENTO. {datetime.toLocaleString()}</p>

          <div className="flex flex-wrap justify-between w-full">
            <div className="w-1/3 border 2px"></div>

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
              {selectedProducts.map((item, i) => {
                subtotal += item?.price;
                total += item?.price;
                return (
                  <tr key={i}>
                    <td>
                      {item?.name} <hr />
                    </td>
                    <td>
                      R$ {item?.price},00
                      <hr />
                    </td>
                    <td>
                      {item?.state} <hr />
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td className="text-right font-bold">Total Bruto:</td>
                <td className="font-bold">
                  R$ {Math.round((total / 100) * 100)},00
                </td>
              </tr>
              <tr>
                <td className="text-right font-bold">No dinheiro ou Pix:</td>
                <td className="font-bold">
                  R$ {Math.round((total / 100) * (100 - 5))},00
                </td>
              </tr>
              <tr>
                <td className="text-right font-bold">No Debito:</td>
                <td className="font-bold">
                  R$ {Math.round((total / 100) * (100 - 3))},00
                </td>
              </tr>
              {total >= 200 && (
                <tr>
                  <td className="text-right font-bold">Credito:</td>
                  <td className="font-bold">
                    Até 2 vezes de R$ {Math.round(total / 2)},00 sem Juros !!!
                  </td>
                </tr>
              )}
              {total >= 300 && (
                <tr>
                  <td className="text-right font-bold">Credito:</td>
                  <td className="font-bold">
                    Até 3 vezes de R$ {Math.round(total / 3)},00 sem Juros !!!
                  </td>
                </tr>
              )}
              {total >= 400 && (
                <tr>
                  <td className="text-right font-bold">Credito:</td>
                  <td className="font-bold">
                    Até 4 vezes de R$ {Math.round(total / 4)},00 sem Juros !!!
                  </td>
                </tr>
              )}
              {total >= 500 && (
                <tr>
                  <td className="text-right font-bold">Credito:</td>
                  <td className="font-bold">
                    Até 5 vezes de R$ {Math.round(total / 5)},00 sem Juros !!!
                  </td>
                </tr>
              )}
              {total >= 600 && (
                <tr>
                  <td className="text-right font-bold">Credito:</td>
                  <td className="font-bold">
                    Até 6 vezes de R$ {Math.round(total / 6)},00 sem Juros !!!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <p className="text-sm">*Este é um orçamento da loja Moveis Eliane.</p>
        </div>
      </div>
    </Layout>
  );
}
