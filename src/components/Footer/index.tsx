import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <Link
            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between ">
          <div>
            <div className="flex justify-center">
              <Image
                className="border-2 border-gray-200 rounded-full"
                alt="{logo}"
                width={140}
                height={140}
                src="/moveis.png"
              ></Image>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-justify">
              A loja Moveis Eliane, localizada em Jaraguá do Sul, oferece móveis
              novos e usados, além de eletrônicos com garantia. Há entrega
              gratuita em Jaraguá do Sul, pagamento em até 12 vezes no cartão e
              desconto à vista. A equipe está disponível por telefone ou
              Whatsapp para atender os clientes.
            </p>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/sobre"
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/novidades"
                >
                  Novidades
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/produtos"
                >
                  Produtos
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/contato"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; {new Date().getFullYear()}. Todos direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
