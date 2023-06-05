import Login from "@/pages/login";
import { Modal, ModalContent, ModalOverlay, Tooltip } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import UserMenu from "../UserMenu";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      <Modal
        isOpen={loginModal}
        onClose={() => setLoginModal(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <div className="flex flex-col items-center justify-center">
            <Login />
          </div>
        </ModalContent>
      </Modal>
      <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button type="button" className="p-2 lg:hidden">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link href="/" className="text-green-600 text-2xl font-semibold">
              <span className="">Moveis Eliane</span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end gap-8">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <Link
                href="/about"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-green-700"
              >
                Sobre
              </Link>

              <Link
                href="/news"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-green-700"
              >
                Novidades
              </Link>

              <Link
                href="/produtos"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-green-700"
              >
                Produtos
              </Link>

              <Link
                href="/contact"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-green-700"
              >
                Contato
              </Link>
            </nav>

            <div className="flex items-center">
              <div className="flex items-center divide-x ">
                <span>
                  <Tooltip hasArrow label="Carrinho" placement="bottom">
                    <a
                      href="/cart"
                      className="block border-b-4 border-transparent p-6 hover:border-green-700"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>

                      <span className="sr-only">Cart</span>
                    </a>
                  </Tooltip>
                </span>
                {session ? (
                  <>
                    <UserMenu />
                  </>
                ) : (
                  <>
                    <span>
                      <Tooltip hasArrow label="Login" placement="bottom">
                        <a
                          href="#"
                          onClick={() => setLoginModal(true)}
                          className="block border-b-4 border-transparent p-6 hover:border-green-700"
                        >
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>

                          <span className="sr-only"> Account </span>
                        </a>
                      </Tooltip>
                    </span>
                  </>
                )}
                <span className="hidden sm:block">
                  <Tooltip hasArrow label="Pesquisar" placement="bottom">
                    <a
                      href="/search"
                      className="block border-b-4 border-transparent p-6 hover:border-green-700"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>

                      <span className="sr-only"> Search </span>
                    </a>
                  </Tooltip>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
