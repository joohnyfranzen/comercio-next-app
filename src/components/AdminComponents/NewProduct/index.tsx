import { Button, Input, Select } from "@chakra-ui/react";
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
    <div className="flex justify-center mt-20">
      <form className="w-96 center" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center">Adicionar Novo Produto</h1>
        <div>
          <Input
            className=" w-full p-2  mt-3 border-2 border-gray-200"
            type="text"
            name="name"
            placeholder="Nome do Produto"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
          <Input
            className=" w-full p-2  mt-3 border-2 border-gray-200"
            type="number"
            name="price"
            placeholder="Valor"
            value={formData.price}
            onChange={handleInputChange}
          />
          <br />
          <p>Estado</p>
          <Select
            className="mb-3"
            name="state"
            value={formData.state}
            onChange={handleSelectChange}
            placeholder="Selecione o estado"
          >
            <option value={"usado"}>Usado</option>
            <option value={"novo"}>Novo</option>
          </Select>
          <Button
            colorScheme="facebook"
            className=" w-full p-2  border-2 border-gray-200"
            type="submit"
          >
            Criar Produto
          </Button>
        </div>
      </form>
    </div>
  );
}
