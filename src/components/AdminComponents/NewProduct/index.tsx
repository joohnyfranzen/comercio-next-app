import { Button, Select } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

interface FormValues {
  name: string;
  price: string;
  state: string;
}

export default function NewProduct() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormValues>({
    name: "",
    price: "",
    state: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      state: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post("/api/product", formData).then((res) => {
      router.push("/admin/produtos");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome do Produto"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Valor"
          value={formData.price}
          onChange={handleInputChange}
        />
        <br />
        <p>Estado</p>
        <Select
          name="state"
          value={formData.state}
          onChange={handleSelectChange}
          placeholder="Selecione o estado"
        >
          <option value={"usado"}>Usado</option>
          <option value={"novo"}>Novo</option>
        </Select>
        <Button type="submit">Criar Produto</Button>
      </form>
    </div>
  );
}
