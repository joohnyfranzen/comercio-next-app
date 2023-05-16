import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function NewUser() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: {
      street: "",
      city: "Jaragua do Sul",
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("/api/user", formData)
      .then((response) => {
        console.log(response.data);

        router.push("/admin/usuarios");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="flex justify-center my-5">
      <form className="w-96 center" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center">Adicionar Novo Usuário</h1>
        <div>
          <Input
            className=" w-full p-2  mt-3 border-2 border-gray-200"
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            className=" w-full p-2  mt-3 border-2 border-gray-200"
            type="text"
            name="email"
            placeholder="E-mail / CPF"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            className=" w-full p-2  mt-3 border-2 border-gray-200"
            type="text"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Input
            className=" w-full p-2  mt-3 border-2 border-gray-200"
            type="text"
            name="phoneNumber"
            placeholder="Numero de telefone"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <Input
            className=" w-full p-2  mt-3 border-2 border-gray-200"
            type="text"
            name="street"
            placeholder="Endereço"
            value={formData.address.street}
            onChange={(event) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                address: {
                  ...prevFormData.address,
                  street: event.target.value,
                },
              }))
            }
          />
          <Input
            className=" w-full p-2  mt-3 border-2 border-gray-200"
            type="text"
            name="city"
            defaultValue="Jaragua do Sul"
            value={formData.address.city}
            onChange={(event) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                address: {
                  ...prevFormData.address,
                  city: event.target.value,
                },
              }))
            }
          />
        </div>

        <Button
          colorScheme="facebook"
          className=" w-full p-2  mt-3 border-2 border-gray-200"
          type="submit"
        >
          Criar Usuário
        </Button>
      </form>
    </div>
  );
}
