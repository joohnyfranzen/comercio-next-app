import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function NewUser() {
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
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="phoneNumber"
          placeholder="Numero de telefone"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <Input
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
        <Button type="submit">Criar Usuário</Button>
      </form>
    </div>
  );
}
