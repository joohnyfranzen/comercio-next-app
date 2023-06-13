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

  useEffect(() => {
    if (AllProducts.length === 0) {
      const getNewProducts = () => {
        productProvider
          .index()
          .then((response) => setAllProducts(response.data));
      };
      getNewProducts();
    }
    var createdAtProduct;
    if (AllProducts.length > 0) {
      createdAtProduct = AllProducts.filter((product) => {
        return product.createdAt;
      });
      const sortedProducts = createdAtProduct.sort(function (a, b) {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        if (dateA < dateB) {
          return 1;
        } else if (dateA > dateB) {
          return -1;
        }
        return 0;
      });

      setAllProducts(sortedProducts);
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
          <div className="bg-gray-50 py-16">
            <div className="mx-auto lg:w-3/4 w-full px-16 lg:px-auto flex flex-col gap-7">
              <ScroolProducts
                title="Ultimos Produtos Adicionados !"
                products={AllProducts}
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
