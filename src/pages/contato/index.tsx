import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import Contact from "@/components/Home/Contact";
import Testimonials from "@/components/Testimonials";
import StorePhoto from "@/components/Home/StorePhoto";
import Annoucements from "@/components/Annoucements";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-1/3 lg:items-center lg:px-8">
              <div className="flex justify-end">
                <Image
                  className="border-2 border-gray-200 rounded-full"
                  alt="{logo}"
                  width={140}
                  height={140}
                  src="/moveis.png"
                ></Image>
              </div>
              <div className="max-w-xl text-center sm:text-left">
                <h2 className="block sm:text-xl font-bold text-gray-700">
                  Há 18 anos, nossa loja de móveis tem se dedicado
                  incansavelmente ao bem-estar da comunidade, através de um
                  trabalho árduo e apaixonado pela criação de ambientes que
                  transformam casas em lares acolhedores.
                </h2>
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <a
                    href="produtos  "
                    className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                  >
                    Ver Produtos
                  </a>

                  <a
                    target="_blank"
                    href="https://wa.me/5547996259348"
                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
                  >
                    Entre em contato
                  </a>
                </div>
              </div>
            </div>
          </section>

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
