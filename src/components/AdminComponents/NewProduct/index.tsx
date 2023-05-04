import { Button, Select } from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
export default function NewProduct() {
  const name = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLSelectElement>(null);
  const formData = {
    name: name.current?.value,
    price: price.current?.value,
    state: state.current?.value,
  };
  const submitForm = () => {
    axios.post("/api/product", formData).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <form>
        <input type="text" ref={name} placeholder="Nome do Produto" />
        <br />
        <input type="number" ref={price} placeholder="Valor" />
        <br />
        <p>Estado</p>
        <Select ref={state} placeholder="Selecione o estado">
          <option value={"usado"}>Usado</option>
          <option value={"novo"}>Novo</option>
        </Select>
        <Button onClick={submitForm}>Criar Produto</Button>
      </form>
    </div>
  );
}
