import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import Contact from "@/components/Home/Contact";
import Card from "@/components/Home/Card";
import ScroolProducts from "@/components/ScrollProducts";
import Testimonials from "@/components/Testimonials";
import StorePhoto from "@/components/Home/StorePhoto";
import Annoucements from "@/components/Annoucements";
import { useEffect, useState } from "react";
import { Product } from "@/@types/Product";
import { productProvider } from "@/services/product";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [AllProducts, setAllProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [usedProducts, setUsedroducts] = useState<Product[]>([]);
  const [balcãoProducts, setBalcãoProducts] = useState<Product[]>([]);
  const [mesaProducts, setMesaProducts] = useState<Product[]>([]);
  const [camaProducts, setCamaProducts] = useState<Product[]>([]);
  const [guardaRoupaProducts, setGuardaRoupaProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (AllProducts.length === 0) {
      const getNewProducts = () => {
        productProvider
          .index()
          .then((response) => setAllProducts(response.data));
      };
      getNewProducts();
    }

    if (AllProducts.length > 0) {
      let usedProducts = AllProducts.filter(
        (product) => product.state === "usado"
      );
      setUsedroducts(usedProducts);
      let newProducts = AllProducts.filter(
        (product) => product.state === "novo"
      );
      newProducts.sort(() => Math.random() - 0.5);
      let balcãoProducts = newProducts.filter((product) =>
        product.name.toLowerCase().includes("balcão")
      );
      setNewProducts(newProducts);
      balcãoProducts.sort(() => Math.random() - 0.5);
      setBalcãoProducts(balcãoProducts);
      let mesaProducts = newProducts.filter((product) =>
        product.name.toLowerCase().includes("mesa")
      );
      mesaProducts.sort(() => Math.random() - 0.5);

      setMesaProducts(mesaProducts);
      let camaProducts = newProducts.filter((product) =>
        product.name.toLowerCase().includes("cama")
      );
      camaProducts.sort(() => Math.random() - 0.5);
      setCamaProducts(camaProducts);
      let guardaRoupaProducts = newProducts.filter((product) =>
        product.name.toLowerCase().includes("roupa")
      );
      guardaRoupaProducts.sort(() => Math.random() - 0.5);
      setGuardaRoupaProducts(guardaRoupaProducts);
    }
  }, [AllProducts]);

  return (
    <>
      <Head>
        <title>Moveis Eliane</title>
        <meta name="description" content="Tudo Para o seu Lar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/moveis.ico" />
      </Head>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Card />
          <div className="bg-gray-50">
            <div className="w-full bg-gray-100 py-5 border-b border-gray-300 mb-16">
              <div className="lg:w-3/4 w-full mx-auto flex justify-between gap-7 text-gray-600">
                <Text fontSize="xl" className="flex gap-2">
                  <label className="semi-bold"></label>
                  Moveis Eliane
                </Text>
                <Text fontSize="xl" className="flex gap-2">
                  <label className="semi-bold"></label>
                  Moveis Eliane
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                  Moveis Eliane
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                  Moveis Eliane
                </Text>
              </div>
            </div>
            <div className="mx-auto lg:w-3/4 w-full lg:px-auto flex flex-col gap-7">
              <ScroolProducts title="Todos Novos!" products={newProducts} />
              {balcãoProducts.length > 0 && (
                <ScroolProducts
                  title="Tudo em Balcão!"
                  products={balcãoProducts}
                />
              )}
              {mesaProducts.length > 0 && (
                <ScroolProducts title="Tudo em Mesa!" products={mesaProducts} />
              )}
              {camaProducts.length > 0 && (
                <ScroolProducts title="Tudo em Cama!" products={camaProducts} />
              )}
              {guardaRoupaProducts.length > 0 && (
                <ScroolProducts
                  title="Tudo em Roupeiro e Multiuso!"
                  products={guardaRoupaProducts}
                />
              )}
              <ScroolProducts
                title="Todos Moveis Usados! Venda somente presencial!"
                products={usedProducts}
              />
              <Button className="float-right w-1/2 my-12">
                <Link href="/produtos">Ver todos os produtos</Link>
              </Button>
            </div>
          </div>
          <Contact />
          <Testimonials />
          <StorePhoto />
          <Annoucements />
        </main>
      </div>
      <Footer />
    </>
  );
}
