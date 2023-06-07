import React from "react";

export default function Card() {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-1/3 lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            O Movel Certo
            <strong className="block font-extrabold text-green-700">
              Para o Seu Lar
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Seja bem vindo a plataforma do Moveis Eliane, conforto e tradição em
            um só lugar!
          </p>

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
  );
}
