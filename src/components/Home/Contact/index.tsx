import React from "react";
import { contactMethods } from "./data";

export default function Contact() {
  return (
    <>
      <main className="py-14">
        <div className="lg:w-3/4 mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-xl space-y-3">
            <h3 className="text-indigo-600 font-semibold">Contato</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Como podemos ajudá-lo(a)?
            </p>
            <p>
              Estamos à disposição para ajudar e esclarecer qualquer dúvida que
              você possa ter sobre nossos móveis. Ficaremos felizes em
              atendê-lo(a)! Entre em contato conosco por telefone ou Whatsapp
              para um atendimento personalizado.
            </p>
          </div>
          <div>
            <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
              {contactMethods.map((item, idx) => (
                <a
                  key={idx}
                  className="flex flex-col items-center"
                  onClick={item.onClick}
                  href={item.href || "#"}
                  target="_blank"
                >
                  <h4 className="text-gray-800 text-lg font-medium">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </div>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
