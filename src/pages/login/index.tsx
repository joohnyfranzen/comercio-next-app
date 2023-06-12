import React, { useState } from "react";
import axios from "axios";
import { useAlertStore } from "@/store/alertStore";
import { UseAdminAuthStore } from "@/store/adminStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setStatus, setMessage } = useAlertStore();
  const { setIsAuthenticated } = UseAdminAuthStore();

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    try {
      const response = await axios
        .post("/api/auth/login", {
          email,
          password,
        })
        .then((response) => {
          if (response.data.admin) {
            setIsAuthenticated(true);
          }
          setStatus("success");
          setMessage(
            `Olá ${response.data.user.name}, seja bem vindo novamente!`
          );
        });
    } catch (error) {
      // Tratar o erro aqui, como exibir uma mensagem de erro
      console.error(error);
    }
  }

  return (
    <main className="w-full p-10 flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Entrar na sua conta
            </h3>
            <p className="">
              Ainda não tem uma conta?{" "}
              <a
                href="javascript:void(0)"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Registrar
              </a>
            </p>
          </div>
        </div>
        <form
          className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-3 gap-x-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
